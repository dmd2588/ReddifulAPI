
# -------
# imports
# -------

import unittest
import flask
import os
from datetime import datetime
import sqlalchemy
from sqlalchemy.orm.session import sessionmaker
from sqlalchemy.orm import joinedload
from app.models import Comment, Post, Subreddit, User

# -----------
# TestModels
# -----------


class TestModels(unittest.TestCase):
    app = flask.Flask(__name__)

    con = sqlalchemy.create_engine(os.environ['DB_URL'], client_encoding='utf8',
                                   pool_size=20, max_overflow=100)

    # We then bind the connection to MetaData()
    meta = sqlalchemy.MetaData(bind=con, reflect=True)

    # We bind the connection to sessionmaker to make sessions later
    Session = sessionmaker(bind=con)

    def setUp(self):
        self.session = self.Session()

    def tearDown(self):
        self.session.close()

    # ----
    # Post
    # ----

    # test simple case to make sure it properly gets a Post model from the
    # database
    def test_posts(self):
        with self.app.test_request_context():
            post = Post(submission_id='test',
                        title='title',
                        url='url',
                        score=10,
                        over_18=False,
                        is_self=True,
                        selftext='text',
                        created_utc=datetime.now(),
                        gilded=0,
                        upvote_ratio=.2,
                        num_comments=3,
                        preview='[{}]',
                        thumbnail='imgur.com',
                        author='person',
                        author_id='012',
                        subreddit='test',
                        subreddit_id='324')
            self.assertIsNotNone(post)
            post_query = self.session.query(Post).filter_by(
                title="He's all pupped out").first()
            self.assertEqual(post_query.url,
                             "https://i.imgur.com/r10bZfA.gifv")
            self.assertEqual(str(post_query.created_utc),
                             "2017-03-02 17:37:39")
            self.assertEqual(post_query.score, 68770)
            self.assertEqual(post_query.submission_id, "5x6v4g")
            self.assertFalse(post_query.over_18)
            self.assertFalse(post_query.is_self)
            self.assertEqual(post_query.selftext, "")
            self.assertEqual(post_query.gilded, 0)

    # test simple case to make sure it properly gets a Comment model from the
    # database
    def test_comments(self):
        with self.app.test_request_context():
            comment = Comment(comment_id='test',
                              body='hi',
                              body_html='<html></html>',
                              score=12,
                              created_utc=datetime.now,
                              gilded=1,
                              edited=datetime.now,
                              author='person',
                              author_id='123',
                              subreddit_id='234',
                              link_id='342')
            self.assertIsNotNone(comment)
            comment_query = self.session.query(Comment).filter_by(
                body="10 steps from a corgi is like 2 steps for most other dog breeds.  :)").first()
            self.assertEqual(str(comment_query.created_utc),
                             "2017-03-02 18:10:53")
            self.assertEqual(comment_query.author_id, "ik5tl")
            self.assertEqual(comment_query.score, 429)
            self.assertEqual(comment_query.comment_id, "defrfhq")
            self.assertEqual(comment_query.gilded, 0)
            self.assertEqual(str(comment_query.edited), "2017-03-02 18:10:53")
            self.assertEqual(comment_query.link_id, "5x6v4g")

    # test simple case to make sure it properly gets a User model from the
    # database
    def test_users(self):
        with self.app.test_request_context():
            user = User(redditor_id='123',
                        name='person',
                        link_karma=166,
                        comment_karma=0,
                        created_utc=datetime.now,
                        is_gold=False,
                        verified=False)
            self.assertIsNotNone(user)
            user_query = self.session.query(
                User).filter_by(name="SilverwingHD").first()
            self.assertEqual(user_query.is_gold, False)
            self.assertEqual(user_query.verified, False)
            self.assertEqual(user_query.link_karma, 524)
            self.assertEqual(user_query.comment_karma, 5119)
            self.assertEqual(user_query.redditor_id, "100i02")
            self.assertEqual(str(user_query.created_utc),
                             "2016-08-01 06:39:57")

    # test simple case to make sure it properly gets a Subreddit model from
    # the database
    def test_subreddits(self):
        with self.app.test_request_context():
            sub = Subreddit(subreddit_id='123',
                            display_name='display',
                            subscribers=10,
                            accounts_active=4,
                            title='test',
                            created_utc=datetime.now,
                            icon_img='icon_url',
                            banner_img='banner_url')
            self.assertIsNotNone(sub)
            subreddit_query = self.session.query(
                Subreddit).filter_by(display_name="politics").first()
            self.assertEqual(subreddit_query.title, "Politics")
            self.assertEqual(subreddit_query.subscribers, 3343705)
            self.assertEqual(subreddit_query.accounts_active, 16918)
            self.assertEqual(subreddit_query.subreddit_id, "2cneq")
            self.assertEqual(str(subreddit_query.created_utc),
                             "2007-08-06 00:16:39")

    # test the one-to-many relationship between Post and Comment
    def test_posts_comments(self):
        with self.app.test_request_context():

            comment_query = self.session.query(
                Comment).filter_by(comment_id="defrfhq").first()
            comment_post = comment_query.post

            self.assertEqual(comment_post.url,
                             "https://i.imgur.com/r10bZfA.gifv")
            self.assertEqual(str(comment_post.created_utc),
                             "2017-03-02 17:37:39")
            self.assertEqual(comment_post.score, 68770)
            self.assertFalse(comment_post.over_18)
            self.assertFalse(comment_post.is_self)
            self.assertEqual(comment_post.selftext, "")
            self.assertEqual(comment_post.gilded, 0)
            self.assertEqual(comment_post.subreddit_id, "2qh1o")
            self.assertEqual(comment_post.author_id, "4imfm")

    # test the many-to-many relationship between User and Subreddit
    def test_users_subreddits(self):
        with self.app.test_request_context():
            query = self.session.query(User).options(joinedload(
                User.subreddits)).filter(User.redditor_id == '7u0qw')
            user_subreddit = query.first().subreddits[0]

            self.assertEqual(user_subreddit.display_name, "Unexpected")
            self.assertEqual(user_subreddit.subscribers, 633053)
            self.assertEqual(user_subreddit.accounts_active, 612)
            self.assertEqual(user_subreddit.subreddit_id, "2w67q")
            self.assertEqual(user_subreddit.created_utc,
                             datetime(2013, 1, 27, 15, 38, 24))


if __name__ == '__main__':
    unittest.main()
