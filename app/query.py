#!/usr/bin/env python3

# pylint: disable = bad-whitespace
# pylint: disable = invalid-name
# pylint: disable = missing-docstring
# pylint: disable = too-many-return-statements
# pylint: disable = too-many-branches

import math, datetime
import os
from app.models import Comment, Post, Subreddit, User
import sqlalchemy
from sqlalchemy.orm.session import sessionmaker

# The return value of create_engine() is our connection object
con = sqlalchemy.create_engine(os.environ['DB_URL'], client_encoding='utf8')


# We then bind the connection to MetaData()
meta = sqlalchemy.MetaData(bind=con, reflect=True)

# We bind the connection to sessionmaker to make sessions later
Session = sessionmaker(bind=con)

comments = meta.tables["Comments"]
mods = meta.tables["Mods"]
users = meta.tables["Redditors"]
posts = meta.tables["Submissions"]
subs = meta.tables["Subreddits"]


def row2dict(row):
    d = {}
    for column in row.__table__.columns:
        d[column.name] = str(getattr(row, column.name))
    return d

def date2epoch(date):
    return time.mktime(date.timetuple()) * 1000


def user_query(query, k, v):
    if k == "name":
        return query.filter(User.name == v)
    if k == "link_karma_max":
        return query.filter(User.link_karma < v)
    if k == "link_karma_min":
        return query.filter(User.link_karma > v)
    if k == "comment_karma_max":
        return query.filter(User.comment_karma < v)
    if k == "comment_karma_min":
        return query.filter(User.comment_karma > v)
    if k == "created_utc_max":
        return query.filter(User.created_utc < datetime.datetime.utcfromtimestamp(v/1000))
    if k == "created_utc_min":
        return query.filter(User.created_utc > datetime.datetime.utcfromtimestamp(v/1000))
    if k == "is_gold":
        return query.filter(User.is_gold == v)
    if k == "verified":
        return query.filter(User.verified == v)
    return query
            
            
def getUsers(order_by = "redditor_id", desc = False, page = 1, per_page = 25, **attr):
    session = Session()
    query = session.query(User)
    for k, v in attr.items():
        query = user_query(query, k, v)
    if desc:
        query = query.order_by(sqlalchemy.desc(order_by))
    else:
        query = query.order_by(order_by)
    page_count = int(math.ceil(query.count() / 25))
    return [row2dict(r) for r in query.offset(page * per_page).limit(per_page)], page_count


def getUser(user_id):
    session = Session()
    query = session.query(User).filter(User.redditor_id == user_id)
    row = query.first()
    if row:
        return row2dict(row)
    return {}


def post_query(query, k, v):
    if k == "title":
        return query.filter(Post.title == v)
    if k == "url":
        return query.filter(Post.url == v)
    if k == "score_min":
        return query.filter(Post.score > v)
    if k == "score_max":
        return query.filter(Post.score < v)
    if k == "created_utc_min":
        return query.filter(Post.created > datetime.datetime.utcfromtimestamp(v/1000))
    if k == "created_utc_max":
        return query.filter(Post.created < datetime.datetime.utcfromtimestamp(v/1000))
    if k == "over_18":
        return query.filter(Post.over_18 == v)
    if k == "is_self":
        return query.filter(Post.is_self == v)
    if k == "selftext":
        return query.filter(Post.selftext == v)
    if k == "gilded_min":
        return query.filter(Post.gilded > v)
    if k == "gilded_max":
        return query.filter(Post.gilded < v)
    if k == "subreddit_id":
        return query.filter(Post.subreddit_id == v)
    if k == "author_id":
        return query.filter(Post.author_id == v)
    if k == "upvote_ratio_min":
        return query.filter(Post.upvote_ratio > v)
    if k == "upvote_ratio_max":
        return query.filter(Post.upvote_ratio < v)
    if k == "num_comments_min":
        return query.filter(Post.num_comments > v)
    if k == "num_comments_max":
        return query.filter(Post.num_comments < v)
    if k == "preview":
        return query.filter(Post.preview == v)
    if k == "thumbnail":
        return query.filter(Post.thumbnail == v)
    if k == "author":
        return query.filter(Post.author == v)
    if k == "subreddit":
        return query.filter(Post.subreddit == v)
    return query


def getPosts(order_by="submission_id", desc=False, page=0, per_page=25, **attr):
    session = Session()
    query = session.query(Post)
    for k, v in attr.items():
        query = post_query(query, k, v)
    if desc:
        query = query.order_by(sqlalchemy.desc(order_by))
    else:
        query = query.order_by(order_by)
    page_count = int(math.ceil(query.count() / 25))
    return [row2dict(r) for r in query.offset(page * per_page).limit(per_page)], page_count


def getPost(post_id):
    session = Session()
    query = session.query(Post).filter(Post.submission_id == post_id)
    row = query.first()
    if row:
        return row2dict(row)
    return {}


def comment_post(query, k, v):
    if k == "body":
        return query.filter(Comment.body == v)
    if k == "body_html":
        return query.filter(Comment.body_html == v)
    if k == "score_min":
        return query.filter(Comment.score > v)
    if k == "score_max":
        return query.filter(Comment.score < v)
    if k == "created_utc_min":
        return query.filter(Comment.created_utc > datetime.datetime.utcfromtimestamp(v/1000))
    if k == "created_utc_max":
        return query.filter(Comment.created_utc < datetime.datetime.utcfromtimestamp(v/1000))
    if k == "edited":
        return query.filter(Comment.edited == v)
    if k == "gilded_min":
        return query.filter(Comment.gilded > v)
    if k == "gilded_max":
        return query.filter(Comment.gilded < v)
    if k == "author":
        return query.filter(Comment.author == v)
    if k == "link_id":
        return query.filter(Comment.link_id == v)
    if k == "author_id":
        return query.filter(Comment.author_id == v)
    return query


def getComments(order_by="comment_id", desc=False, page=0, per_page=25, **attr):
    session = Session()
    query = session.query(Comment)
    for k, v in attr.items():
        query = comment_post(query, k, v)
    if desc:
        query = query.order_by(sqlalchemy.desc(order_by))
    else:
        query = query.order_by(order_by)
    page_count = int(math.ceil(query.count() / 25))
    return [row2dict(r) for r in query.offset(page * per_page).limit(per_page)], page_count

def getComment(comment_id):
    session = Session()
    query = session.query(Comment).filter(Comment.comment_id == comment_id)
    row = query.first()
    if row:
        return row2dict(row)
    return {}


def sub_query(query, k, v):
    if k == "display_name":
        return query.filter(Subreddit.display_name == v)
    if k == "subscribers_min":
        return query.filter(Subreddit.subscribers > v)
    if k == "subscribers_max":
        return query.filter(Subreddit.subscribers < v)
    if k == "accounts_active_min":
        return query.filter(Subreddit.accounts_active > v)
    if k == "accounts_active_min":
        return query.filter(Subreddit.accounts_active < v)
    if k == "created_utc_min":
        return query.filter(Subreddit.created_utc > datetime.datetime.utcfromtimestamp(v/1000))
    if k == "created_utc_max":
        return query.filter(Subreddit.created_utc < datetime.datetime.utcfromtimestamp(v/1000))
    if k == "title":
        return query.filter(Subreddit.title == v)
    if k == "icon_img":
        return query.filter(Subreddit.icon_img == v)
    if k == "banner_img":
        return query.filter(Subreddit.banner_img == v)
    return query


def getSubs(order_by="subreddit_id", desc=False, page=0, per_page=25, **attr):
    session = Session()
    query = session.query(Subreddit)
    for k, v in attr.items():
        query = sub_query(query, k, v)
    if desc:
        query = query.order_by(sqlalchemy.desc(order_by))
    else:
        query = query.order_by(order_by)
    page_count = int(math.ceil(query.count() / 25))
    return [row2dict(r) for r in query.offset(page * per_page).limit(per_page)], page_count


def getSub(subreddit_id):
    session = Session()
    query = session.query(Subreddit).filter(
        Subreddit.subreddit_id == subreddit_id)
    row = query.first()
    if row:
        return row2dict(row)
    return {}
