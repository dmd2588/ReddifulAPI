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
		self.tropy_table = []
		self.mod_table = []
		self.reddit = praw.Reddit(client_id = client, 
				                  client_secret = secret,
			                      password = password, 
			                      user_agent = ua,
			                      username = name)
 
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
									"link_id": comment.link_id,
									"score": comment.score,
									"subreddit_id": comment.subreddit.id,
									"gilded": comment.gilded,
									"edited": comment.edited,
			                        "_fetched": comment._fetched})
		return

	def containsSubreddit(self, subreddit_id):
		for row in self.subreddits_table:
			if row['id'] == subreddit_id:
				return True
		return False

	def scrape(self, num_submissions, time_period):
		for submission in self.reddit.subreddit('all').top(time_period, limit = num_submissions):
			self.addSubmission(submission)
			# print(submission.title)
			# pprint.pprint(vars(submission))
			subreddit = submission.subreddit;
			self.addSubreddit(subreddit)
			# print(subreddit.title)
			# pprint.pprint(vars(subreddit))
			for mod in subreddit.moderator:
				user = self.reddit.redditor(mod.name)
				self.addUser(user)
				# print(user.name, user.link_karma, user.id)
				# pprint.pprint(vars(user))
				for comment in user.comments.top(time_period, limit = 1):
					self.addComment(comment)
					# print(comment.score)
					# pprint.pprint(vars(comment))
		pprint.pprint(self.users_table)
		pprint.pprint(self.subreddits_table)
		pprint.pprint(self.comments_table)
		pprint.pprint(self.submissions_table)

def main():
   scraper = RedditScraper(config.CLIENT, config.SECRET, config.PASS, config.USER_AGENT, config.NAME)
   scraper.scrape(1, 'week')

if __name__ == "__main__":
    main()