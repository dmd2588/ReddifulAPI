#!/usr/bin/env python3

# pylint: disable = bad-whitespace
# pylint: disable = invalid-name
# pylint: disable = missing-docstring
# pylint: disable = too-many-return-statements
# pylint: disable = too-many-branches
# pylint: disable = too-many-arguments

import math
import datetime
import os
from app.models import Comment, Post, Subreddit, User
import sqlalchemy
from sqlalchemy.orm.session import sessionmaker
from sqlalchemy.orm import joinedload
from sqlalchemy import or_

# The return value of create_engine() is our connection object
con = sqlalchemy.create_engine(os.environ['DB_URL'], client_encoding='utf8')


# We then bind the connection to MetaData()
meta = sqlalchemy.MetaData(bind=con, reflect=True)

# We bind the connection to sessionmaker to make sessions later
Session = sessionmaker(bind=con)


def row2dict(row):
    d = {}
    for column in row.__table__.columns:
        d[column.name] = str(getattr(row, column.name))
    return d


def getContainer(model, order_by=None, desc=False, page=0, per_page=25, filterargs=None):
    session = Session()
    query = session.query(model)

    # Filter the query
    filterargs = filterargs if filterargs is not None else dict()
    for k, v in filterargs.items():
        if k.endswith('_max'):
            query = query.filter(getattr(model, k.replace('_max', '')) < float(v))
        elif k.endswith('_min'):
            query = query.filter(getattr(model, k.replace('_min', '')) > float(v))
        else:
            query = query.filter(getattr(model, k) == v)

    # Sort the query
    if order_by and desc:
        query = query.order_by(sqlalchemy.desc(order_by))
    elif order_by:
        query = query.order_by(order_by)


    # Paginate the query
    page_count = int(math.ceil(query.count() / per_page))
    query = query.offset(page * per_page).limit(per_page)

    result = [{c.name: getattr(r, c.name) for c in r.__table__.columns} for r in query]
    session.close()
    return result, page_count

def getInstance(model, key, ID):
    session = Session()
    query = session.query(model).filter(getattr(model, key) == ID)
    r = query.first()
    session.close()
    if r:
        return {c.name: getattr(r, c.name) for c in r.__table__.columns}
    return {}


def getUsers(order_by="redditor_id", **kwargs):
    return getContainer(User, order_by, **kwargs)

def getUser(user_id):
    return getInstance(User, 'redditor_id', user_id)


def getSubredditMods(subreddit_id):
    session = Session()
    query = session.query(Subreddit).options(joinedload(Subreddit.users)).filter(
        Subreddit.subreddit_id == subreddit_id)
    row = query.first()
    return [mod.__dict__ for mod in row.users]


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
        return query.filter(Post.created_utc > datetime.datetime.utcfromtimestamp(v / 1000))
    if k == "created_utc_max":
        return query.filter(Post.created_utc < datetime.datetime.utcfromtimestamp(v / 1000))
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
    result = [row2dict(r) for r in query.offset(
        page * per_page).limit(per_page)], page_count
    session.close()
    return result


def getPost(post_id):
    session = Session()
    query = session.query(Post).filter(Post.submission_id == post_id)
    row = query.first()
    session.close()
    if row:
        return row2dict(row)
    return {}


def getUserPosts(redditor_id, limit=5):
    session = Session()
    query = session.query(Post).filter(Post.author_id == redditor_id)
    return [row2dict(r) for r in query.limit(limit)]


def getSubredditPosts(subreddit_id, limit=5):
    session = Session()
    query = session.query(Post).filter(Post.subreddit_id == subreddit_id)
    return [row2dict(r) for r in query.limit(limit)]


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
        return query.filter(Comment.created_utc > datetime.datetime.utcfromtimestamp(v / 1000))
    if k == "created_utc_max":
        return query.filter(Comment.created_utc < datetime.datetime.utcfromtimestamp(v / 1000))
    if k == "edited_min":
        return query.filter(Comment.edited > datetime.datetime.utcfromtimestamp(v / 1000))
    if k == "edited_max":
        return query.filter(Comment.edited < datetime.datetime.utcfromtimestamp(v / 1000))
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
    result = [row2dict(r) for r in query.offset(
        page * per_page).limit(per_page)], page_count
    session.close()
    return result


def getComment(comment_id):
    session = Session()
    query = session.query(Comment).filter(Comment.comment_id == comment_id)
    row = query.first()
    session.close()
    if row:
        return row2dict(row)
    return {}


def getUserComments(redditor_id, limit=5):
    session = Session()
    query = session.query(Comment).filter(Comment.author_id == redditor_id)
    return [row2dict(r) for r in query.limit(limit)]


def getPostComments(link_id, limit=5):
    session = Session()
    query = session.query(Comment).filter(Comment.link_id == link_id)
    return [row2dict(r) for r in query.limit(limit)]


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
        return query.filter(Subreddit.created_utc > datetime.datetime.utcfromtimestamp(v / 1000))
    if k == "created_utc_max":
        return query.filter(Subreddit.created_utc < datetime.datetime.utcfromtimestamp(v / 1000))
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
    result = [row2dict(r) for r in query.offset(
        page * per_page).limit(per_page)], page_count
    session.close()
    return result


def getSub(subreddit_id):
    session = Session()
    query = session.query(Subreddit).filter(
        Subreddit.subreddit_id == subreddit_id)
    row = query.first()
    session.close()
    if row:
        return row2dict(row)
    return {}


def getModdedSubs(redditor_id):
    session = Session()
    query = session.query(User).options(joinedload(
        User.subreddits)).filter(User.redditor_id == redditor_id)
    row = query.first()
    return [sub.__dict__ for sub in row.subreddits]


def getTopImages(limit=5):
    session = Session()
    query = session.query(Post).filter(Post.upvote_ratio > 0.8)
    query = query.filter(or_(or_(Post.url.like("http://i.imgur%"),
                                 Post.url.like("http://imgur")), Post.url.like("https://i.redd%")))
    query = query.order_by(sqlalchemy.desc('score'))
    return [{'preview': getattr(r, 'preview'), 'url': getattr(r,'url')} for r in query.limit(limit)]
