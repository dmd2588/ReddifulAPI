import praw
import time
import pprint
import json
import config

class RedditScraper:
    def __init__(self, client, secret, password, ua, name):
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

    def containsTrophy(self, trophy_name):
        for row in self.trophies_table:
            if row['name'] == trophy_name:
                return True
        return False

    def containsComment(self, comment_id):
        for row in self.comments_table:
            if row['id'] == comment_id:
                return True
        return False

    def containsUser(self, user_id):
        for row in self.users_table:
            if row['id'] == user_id:
                return True
        return False

    def containsSubreddit(self, subreddit_id):
        for row in self.subreddits_table:
            if row['id'] == subreddit_id:
                return True
        return False

    def addMod(self, user, subreddit):
        self.mods_table.append({"user_id": user.id,
                                "subreddit_id": subreddit.id})
        return

    def addSubmission(self, submission):
        author_id = 'None'
        if submission.author is not None:
            author_id = submission.author.id
        self.submissions_table.append({"id": submission.id, 
                                       "title": submission.title,
                                       "score": submission.score,
                                       "url": submission.url,
                                       "author_id": author_id,
                                       "over_18": submission.over_18,
                                       "is_self": submission.is_self,
                                       "selftext": submission.selftext,
                                       "gilded": submission.gilded,
                                       "created": submission.created,
                                       "created_utc": submission.created_utc,
                                       "subreddit_id": submission.subreddit_id,
                                       "_fetched": submission._fetched})
        return

    def addUser(self, user):
        self.users_table.append({"id": user.id, 
                                 "name": user.name, 
                                 "comment_karma": user.comment_karma,
                                 "link_karma": user.link_karma,
                                 "created": user.created,
                                 "created_utc": user.created_utc,
                                 "is_gold": user.is_gold,
                                 "verified": user.verified,
                                 "_fetched": user._fetched})
        return

    def addSubreddit(self, subreddit):
        self.subreddits_table.append({"id": subreddit.id, 
                                      "title": subreddit.title,
                                      "display_name": subreddit.display_name,
                                      "accounts_active": subreddit.accounts_active,
                                      "subscribers": subreddit.subscribers,
                                      "created": subreddit.created,
                                      "created_utc": subreddit.created_utc,
                                      "icon_img": subreddit.icon_img,
                                      "banner_img": subreddit.banner_img,
                                      "_fetched": subreddit._fetched})
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
                                    "author_id": author_id,
                                    "link_id": comment.link_id[3:],
                                    "score": comment.score,
                                    "subreddit_id": comment.subreddit.id,
                                    "gilded": comment.gilded,
                                    "edited": comment.edited,
                                    "_fetched": comment._fetched})
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

    def scrapeSubreddit(self, subreddit, time_period):
        if not self.containsSubreddit(subreddit.id):
            self.addSubreddit(subreddit)
            self.scrapeMods(subreddit, time_period)

    def scrapeUserComments(self, user, time_period, num_comments): 
        for comment in user.comments.top(time_period, limit = num_comments):
            if not self.containsComment(comment.id):
                self.addComment(comment)

                subreddit = self.reddit.subreddit(comment.subreddit.display_name)
                self.scrapeSubreddit(subreddit, time_period)

    def scrapeUser(self, user, time_period, num_comments):
        if not self.containsUser(user.id):
            self.addUser(user)
            self.scrapeTrophies(user)
        self.scrapeUserComments(user, time_period, num_comments)

    def scrapeMods(self, subreddit, time_period):
        for mod in subreddit.moderator:
            # Add mod relationship to association table
            user = self.reddit.redditor(mod.name)
            self.addMod(user, subreddit)
            self.scrapeUser(user, time_period, 0)

    def scrape(self, num_submissions, time_period):
        """
        Loop through num_submissions top submissions during the last time_period
        """
        for submission in self.reddit.subreddit('all').top(time_period, limit = num_submissions):
            self.addSubmission(submission)

            # Check to see if submission author is already added
            if submission.author is not None and not self.containsUser(submission.author.id):
                self.scrapeUser(submission.author, time_period, 1)

            # Add the submission's subreddit if not already in
            subreddit = submission.subreddit;
            self.scrapeSubreddit(subreddit, time_period)

            # Loop through top level comments
            submission.comment_sort = 'top'
            submission.comment_limit = 2
            submission.comments.replace_more(limit=0)
            for comment in submission.comments:
                if not self.containsComment(comment.id):
                    self.addComment(comment)

        pprint.pprint(self.mods_table)
        pprint.pprint(self.users_table)
        pprint.pprint(self.subreddits_table)
        pprint.pprint(self.comments_table)
        pprint.pprint(self.submissions_table)
        pprint.pprint(self.trophies_table)
        pprint.pprint(self.trophies_association_table)

def main():
   scraper = RedditScraper(config.CLIENT, config.SECRET, config.PASS, config.USER_AGENT, config.NAME)
   scraper.scrape(3, 'week')

if __name__ == "__main__":
    main()