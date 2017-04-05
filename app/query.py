from models import Comment, Post, Subreddit, User
from decimal import Decimal
import sqlalchemy, json, datetime
import os

# The return value of create_engine() is our connection object
con = sqlalchemy.create_engine(os.environ['DB_URL'], client_encoding='utf8')

# We then bind the connection to MetaData()
meta = sqlalchemy.MetaData(bind=con, reflect=True)

comments = meta.tables["Comments"]
mods = meta.tables["Mods"]
users = meta.tables["Redditors"]
posts = meta.tables["Submissions"]
subs = meta.tables["Subreddits"]


def getUsers():
    result = con.execute(users.select())
    return [dict(r) for r in result]

def getUser(user_id):
    result = con.execute(users.select().where(users.c.redditor_id == user_id))
    result = [dict(r) for r in result]
    return result[0] if result else None

def getPosts():
    result = con.execute(posts.select())
    return [dict(r) for r in result]

def getPost(post_id):
    result = con.execute(posts.select().where(posts.c.submission_id == post_id))
    result = [dict(r) for r in result]
    return result[0] if result else None

def getComments():
    result = con.execute(comments.select())
    return [dict(r) for r in result]

def getComment(comment_id):
    result = con.execute(comments.select().where(comments.c.comment_id == comment_id))
    result = [dict(r) for r in result]
    return result[0] if result else None

def getSubs():
    result = con.execute(subs.select())
    return [dict(r) for r in result]

def getSub(subreddit_id):
    result = con.execute(subs.select().where(subs.c.subreddit_id == subreddit_id))
    result = [dict(r) for r in result]
    return result[0] if result else None
