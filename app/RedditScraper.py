import praw
import datetime
import pprint
import json
import config
import psycopg2
from psycopg2.extensions import AsIs

class RedditScraper:
    def __init__(self, client, secret, password, ua, name, db_name, db_pass, db_host, db):
        self.users_table = []
        self.subreddits_table = []
        self.comments_table = []
        self.submissions_table = []
        self.trophies_table = []
        self.trophies_association_table = []
        self.mods_table = []
        self.reddit = praw.Reddit(client_id = client,
                                  client_secret = secret,
                                  password = password,
                                  user_agent = ua,
                                  username = name)

        self.conn = psycopg2.connect(dbname=db, user=db_name, password=db_pass, host=db_host)
        self.cur = self.conn.cursor()

    def addMod(self, user, subreddit):
        row = {"redditor_id": user.id,
               "subreddit_id": subreddit.id}

        columns = row.keys()
        values = [row[column] for column in columns]
        insert_statement = 'insert into "Mods" (%s) values %s ON CONFLICT(redditor_id, subreddit_id) DO NOTHING ;'
        insert_statement = self.cur.mogrify(insert_statement, (AsIs(','.join(columns)), tuple(values)))
        self.cur.execute(insert_statement)
        self.conn.commit()
        return

    def addSubmission(self, submission):
        author_id = '[deleted]'
        author = '[deleted]'
        subreddit = submission.subreddit.display_name
        subreddit_id = submission.subreddit.id
        if submission.author is not None:
            author_id = submission.author.id
            author = submission.author.name
        preview = {}
        if hasattr(submission, 'preview'):
            preview = submission.preview
        row = {"submission_id": submission.id,
               "title": submission.title,
               "score": submission.score,
               "upvote_ratio": submission.upvote_ratio,
               "num_comments": submission.num_comments,
               "preview": json.dumps(preview),
               "thumbnail": submission.thumbnail,
               "url": submission.url,
               "over_18": submission.over_18,
               "is_self": submission.is_self,
               "selftext": submission.selftext,
               "gilded": submission.gilded,
               "created_utc": datetime.datetime.fromtimestamp(submission.created_utc),
               "author": author,
               "subreddit": subreddit,
               "author_id": author_id,
               "subreddit_id": subreddit_id}

        columns = row.keys()
        values = [row[column] for column in columns]
        insert_statement = 'insert into "Submissions" (%s) values %s ON CONFLICT(submission_id) DO NOTHING ;'
        insert_statement = self.cur.mogrify(insert_statement, (AsIs(','.join(columns)), tuple(values)))
        self.cur.execute(insert_statement)
        self.conn.commit()
        return

    def addUser(self, user):
        row = {"redditor_id": user.id,
               "name": user.name,
               "comment_karma": user.comment_karma,
               "link_karma": user.link_karma,
               "created_utc": datetime.datetime.fromtimestamp(user.created_utc),
               "is_gold": user.is_gold,
               "verified": user.verified}

        columns = row.keys()
        values = [row[column] for column in columns]
        insert_statement = 'insert into "Redditors" (%s) values %s ON CONFLICT(redditor_id) DO NOTHING ;'
        insert_statement = self.cur.mogrify(insert_statement, (AsIs(','.join(columns)), tuple(values)))
        self.cur.execute(insert_statement)
        self.conn.commit()

        return

    def addSubreddit(self, subreddit):
        row = {"subreddit_id": subreddit.id,
               "title": subreddit.title,
               "display_name": subreddit.display_name,
               "accounts_active": subreddit.accounts_active,
               "subscribers": subreddit.subscribers,
               "created_utc": datetime.datetime.fromtimestamp(subreddit.created_utc),
               "icon_img": subreddit.icon_img,
               "banner_img": subreddit.banner_img}

        columns = row.keys()
        values = [row[column] for column in columns]
        insert_statement = 'insert into "Subreddits" (%s) values %s ON CONFLICT(subreddit_id) DO NOTHING ;'
        insert_statement = self.cur.mogrify(insert_statement, (AsIs(','.join(columns)), tuple(values)))
        self.cur.execute(insert_statement)
        self.conn.commit()
        return

    def addComment(self, comment):
        author_id = 'None'
        if comment.author is not None:
            author_id = comment.author.id
        self.comments_table.append({"id": comment.id,
                                    "created": comment.created,
                                    "created_utc": comment.created_utc,
                                    "body": comment.body,
                                    "body_html": comment.body_html,
                                    "score": comment.score,
                                    "gilded": comment.gilded,
                                    "edited": comment.edited,
                                    "author_id": author_id,
                                    "link_id": comment.link_id,
                                    "subreddit_id": comment.subreddit.id})
        return

    def scrapeTrophies(self, user):
        trophies = self.reddit.request("GET", "/api/v1/user/" + user.name + "/trophies")
        for trophy in trophies["data"]["trophies"]:
            data = trophy["data"]
            if not self.containsTrophy(data["name"]):
                self.trophies_table.append({"id": data["award_id"],
                                            "icon_40": data["icon_40"],
                                            "icon_70": data["icon_70"],
                                            "name": data["name"]})

            self.trophies_association_table.append({"user_id": user.id,
                                                    "trophy_name": data["name"],
                                                    "description": data["description"]})

    def scrapeMods(self):
        self.cur.execute('SELECT display_name FROM "Subreddits"')
        rows = self.cur.fetchall()
        for row in rows:
            subreddit = self.reddit.subreddit(row[0])
            print subreddit.title
            print "----------------------------"
            for mod in subreddit.moderator:
                redditor = self.reddit.redditor(mod.name)
                print redditor.name
                if not hasattr(redditor, 'id'):
                    print "BANNED"
                else:
                    self.addUser(redditor)
                    self.addMod(redditor, subreddit)
            print "----------------------------"

    def scrapeUsers(self):
        self.cur.execute('SELECT author FROM "Submissions" GROUP BY author')
        rows = self.cur.fetchall()
        for row in rows:
            redditor = self.reddit.redditor(row[0])
            print redditor.name
            self.addUser(redditor)

    def scrapeSubreddits(self):
        self.cur.execute('SELECT subreddit FROM "Submissions" GROUP BY subreddit')
        rows = self.cur.fetchall()
        for row in rows:
            subreddit = self.reddit.subreddit(row[0])
            print subreddit.title
            self.addSubreddit(subreddit)

    def scrapeSubmissions(self, num_submissions, time_period):
        """
        Loop through num_submissions top submissions during the last time_period
        """
        count = 0
        for submission in self.reddit.subreddit('all').top(time_period, limit = num_submissions):
            self.addSubmission(submission)
            count = count + 1
            print count

def main():
   scraper = RedditScraper(config.CLIENT, config.SECRET, config.PASS, config.USER_AGENT, config.NAME, config.DB_NAME, config.DB_PASS, config.DB_HOST, config.DB)
   # scraper.scrapeSubmissions(300, 'week')
   # scraper.scrapeSubreddits()
   # scraper.scrapeUsers()
   # scraper.scrapeMods()

if __name__ == "__main__":
    main()
