import math
import os
from app.models import Comment, Post, Subreddit, User
import sqlalchemy
from sqlalchemy.orm.session import sessionmaker
from sqlalchemy.orm import joinedload
from sqlalchemy import or_

# pylint: disable = too-many-arguments

# The return value of create_engine() is our connection object
con = sqlalchemy.create_engine(os.environ['DB_URL'], client_encoding='utf8')


# We then bind the connection to MetaData()
meta = sqlalchemy.MetaData(bind=con, reflect=True)

# We bind the connection to sessionmaker to make sessions later
Session = sessionmaker(bind=con)


def row2dict(row):
    return {c.name: getattr(row, c.name) for c in row.__table__.columns}


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

    result = [row2dict(r) for r in query]
    session.close()
    return result, page_count

def getInstance(model, key, ID):
    session = Session()
    query = session.query(model).filter(getattr(model, key) == ID)
    r = query.first()
    session.close()
    if r:
        return row2dict(r)
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
    session.close()
    return [mod.__dict__ for mod in row.users]


def getPosts(order_by="submission_id", **kwargs):
    return getContainer(Post, order_by, **kwargs)


def getPost(post_id):
    return getInstance(Post, 'submission_id', post_id)


def getUserPosts(author_id, limit=5):
    filterargs = {'author_id': author_id}
    return getContainer(Post, filterargs=filterargs, per_page=limit)[0]


def getSubredditPosts(subreddit_id, limit=5):
    filterargs = {'subreddit_id': subreddit_id}
    return getContainer(Post, filterargs=filterargs, per_page=limit)[0]


def getComments(order_by="comment_id", **kwargs):
    return getContainer(Comment, order_by, **kwargs)


def getComment(comment_id):
    return getInstance(Comment, 'comment_id', comment_id)


def getUserComments(author_id, limit=5):
    filterargs = {'author_id': author_id}
    return getContainer(Comment, filterargs=filterargs, per_page=limit)[0]


def getPostComments(link_id, limit=5):
    filterargs = {'link_id': link_id}
    return getContainer(Comment, filterargs=filterargs, per_page=limit)[0]


def getSubs(order_by="subreddit_id", **kwargs):
    return getContainer(Subreddit, order_by, **kwargs)


def getSub(subreddit_id):
    return getInstance(Subreddit, 'subreddit_id', subreddit_id)


def getModdedSubs(redditor_id):
    session = Session()
    query = session.query(User).options(joinedload(
        User.subreddits)).filter(User.redditor_id == redditor_id)
    row = query.first()
    session.close()
    return [sub.__dict__ for sub in row.subreddits]


def getTopImages(limit=5):
    session = Session()
    query = (session.query(Post)
             .filter(Post.upvote_ratio > 0.8)
             .filter(or_(or_(Post.url.like("http://i.imgur%"),
                             Post.url.like("http://imgur")),
                         Post.url.like("https://i.redd%")))
             .order_by(sqlalchemy.desc('score'))
             .limit(limit))
    results = [{'preview': r.preview, 'url': r.url} for r in query]
    session.close()
    return results
