import math
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


def key2col_user(k):
    if k == "name":
        return User.name
    if k == "link_karma":
        return User.link_karma
    if k == "comment_karma":
        return User.comment_karma
    if k == "created_utc":
        return User.created_utc
    if k == "is_gold":
        return User.is_gold
    if k == "verified":
        return User.verified
    return None


def getUsers(order_by="redditor_id", desc=False, page=1, per_page=25, **attr):
    session = Session()
    query = session.query(User)
    for k, v in attr.items():
        col = key2col_user(k)
        if col:
            query = query.filter(col == v)
    if desc:
        query = query.order_by(sqlalchemy.desc(order_by))
    else:
        query = query.order_by(order_by)
    page_count = int(math.ceil(query.count() / 25))
    return [row2dict(r) for r in query.offset((page - 1) * per_page).limit(per_page)], page_count


def getUser(user_id):
    session = Session()
    query = session.query(User).filter(User.redditor_id == user_id)
    row = query.first()
    if row:
        return row2dict(row)
    return {}


def key2col_post(k):
    if k == "title":
        return Post.title
    if k == "url":
        return Post.url
    if k == "score":
        return Post.score
    if k == "created_utc":
        return Post.created_utc
    if k == "over_18":
        return Post.over_18
    if k == "is_self":
        return Post.is_self
    if k == "selftext":
        return Post.selftext
    if k == "gilded":
        return Post.gilded
    if k == "subreddit_id":
        return Post.subreddit_id
    if k == "author_id":
        return Post.author_id
    if k == "upvote_ratio":
        return Post.upvote_ratio
    if k == "num_comments":
        return Post.num_comments
    if k == "preview":
        return Post.preview
    if k == "thumbnail":
        return Post.thumbnail
    if k == "author":
        return Post.author
    if k == "subreddit":
        return Post.subreddit
    return None


def getPosts(order_by="submission_id", desc=False, page=1, per_page=25, **attr):
    session = Session()
    query = session.query(Post)
    for k, v in attr.items():
        col = key2col_post(k)
        if col:
            query = query.filter(col == v)
    if desc:
        query = query.order_by(sqlalchemy.desc(order_by))
    else:
        query = query.order_by(order_by)
    page_count = int(math.ceil(query.count() / 25))
    return [row2dict(r) for r in query.offset((page - 1) * per_page).limit(per_page)], page_count


def getPost(post_id):
    session = Session()
    query = session.query(Post).filter(Post.submission_id == post_id)
    row = query.first()
    if row:
        return row2dict(row)
    return {}


def key2col_comment(k):
    if k == "body":
        return Comment.body
    if k == "body_html":
        return Comment.body_html
    if k == "score":
        return Comment.score
    if k == "created_utc":
        return Comment.created_utc
    if k == "edited":
        return Comment.edited
    if k == "gilded":
        return Comment.gilded
    if k == "author":
        return Comment.author
    if k == "link_id":
        return Comment.link_id
    if k == "author_id":
        return Comment.author_id
    return None


def getComments(order_by="comment_id", desc=False, page=1, per_page=25, **attr):
    session = Session()
    query = session.query(Comment)
    for k, v in attr.items():
        col = key2col_comment(k)
        if col:
            query = query.filter(col == v)
    if desc:
        query = query.order_by(sqlalchemy.desc(order_by))
    else:
        query = query.order_by(order_by)
    page_count = int(math.ceil(query.count() / 25))
    return [row2dict(r) for r in query.offset((page - 1) * per_page).limit(per_page)], page_count

def getComment(comment_id):
    session = Session()
    query = session.query(Comment).filter(Comment.comment_id == comment_id)
    row = query.first()
    if row:
        return row2dict(row)
    return {}


def key2col_sub(k):
    if k == "display_name":
        return Subreddit.display_name
    if k == "subscribers":
        return Subreddit.subscribers
    if k == "accounts_active":
        return Subreddit.accounts_active
    if k == "created_utc":
        return Subreddit.created_utc
    if k == "title":
        return Subreddit.title
    if k == "icon_img":
        return Subreddit.icon_img
    if k == "banner_img":
        return Subreddit.banner_img
    return None


def getSubs(order_by="subreddit_id", desc=False, page=1, per_page=25, **attr):
    session = Session()
    query = session.query(Subreddit)
    for k, v in attr.items():
        col = key2col_sub(k)
        if col:
            query = query.filter(col == v)
    if desc:
        query = query.order_by(sqlalchemy.desc(order_by))
    else:
        query = query.order_by(order_by)
    page_count = int(math.ceil(query.count() / 25))
    return [row2dict(r) for r in query.offset((page - 1) * per_page).limit(per_page)], page_count


def getSub(subreddit_id):
    """Returns subreddit data given the id of a subreddit """
    session = Session()
    query = session.query(Subreddit).filter(
        Subreddit.subreddit_id == subreddit_id)
    row = query.first()
    if row:
        return row2dict(row)
    return {}
