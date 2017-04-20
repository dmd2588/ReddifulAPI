#!/usr/bin/env python3

# pylint: disable = bad-whitespace
# pylint: disable = invalid-name
# pylint: disable = missing-docstring
# pylint: disable = too-many-instance-attributes
# pylint: disable = too-few-public-methods

from sqlalchemy.ext.declarative import declarative_base
from sqlalchemy import Column, Integer, String, Boolean, ForeignKey, DateTime, Float, JSON
from sqlalchemy.orm import relationship
from sqlalchemy.sql.schema import Table
from datetime import date

Base = declarative_base()

# association table for the many-to-many relationship between User and
# Subreddit
mods_table = Table('Mods', Base.metadata,
                   Column('redditor_id', Integer, ForeignKey(
                       'Redditors.redditor_id')),
                   Column('subreddit_id', Integer, ForeignKey('Subreddits.subreddit_id')))

# ------------
# User
# ------------


class User(Base):
    __tablename__ = 'Redditors'

    redditor_id = Column(String, primary_key=True)
    name = Column(String)
    link_karma = Column(Integer)
    comment_karma = Column(Integer)
    created_utc = Column(DateTime)
    is_gold = Column(Boolean)
    verified = Column(Boolean)
    posts = relationship("Post", back_populates="user")
    comments = relationship("Comment", back_populates="user")
    subreddits = relationship("Subreddit", secondary=mods_table)

    def __init__(self, **attr):
        """
        creates a User with given attributes
        """

        assert isinstance(attr["redditor_id"], str)
        assert isinstance(attr["name"], str)
        assert isinstance(attr["link_karma"], int) and attr["link_karma"] >= 0
        assert isinstance(attr["comment_karma"], int) and attr[
            "comment_karma"] >= 0
        assert isinstance(attr["created_utc"], date)
        assert isinstance(attr["is_gold"], bool)
        assert isinstance(attr["verified"], bool)
        self.redditor_id = attr["redditor_id"]
        self.name = attr["name"]
        self.link_karma = attr["link_karma"]
        self.comment_karma = attr["comment_karma"]
        self.created_utc = attr["created_utc"]
        self.is_gold = attr["is_gold"]
        self.verified = attr["verified"]

# ------------
# Subreddit
# ------------


class Subreddit(Base):
    __tablename__ = 'Subreddits'

    subreddit_id = Column(String, primary_key=True)
    display_name = Column(String)
    subscribers = Column(Integer)
    accounts_active = Column(Integer)
    title = Column(String)
    created_utc = Column(DateTime)
    icon_img = Column(String)
    banner_img = Column(String)
    posts = relationship("Post", back_populates="sub")
    users = relationship("User", secondary=mods_table)

    def __init__(self, **attr):
        """
        creates a Subreddit with given attributes
        """
        assert isinstance(attr["subreddit_id"], str)
        assert isinstance(attr["display_name"], str)
        assert isinstance(attr["subscribers"], int) and attr[
            "subscribers"] >= 0
        assert isinstance(attr["accounts_active"], int) and attr[
            "accounts_active"] >= 0
        assert isinstance(attr["created_utc"], date)
        assert isinstance(attr["title"], str)
        assert isinstance(attr["icon_img"], str)
        assert isinstance(attr["banner_img"], str)

        self.subreddit_id = attr["subreddit_id"]
        self.display_name = attr["display_name"]
        self.subscribers = attr["subscribers"]
        self.accounts_active = attr["accounts_active"]
        self.created_utc = attr["created_utc"]
        self.title = attr["title"]
        self.icon_img = attr["icon_img"]
        self.banner_img = attr["banner_img"]

# ------------
# Post
# ------------


class Post(Base):
    __tablename__ = 'Submissions'

    submission_id = Column(String, primary_key=True)
    title = Column(String)
    url = Column(String)
    score = Column(Integer)
    over_18 = Column(Boolean)
    is_self = Column(Boolean)
    selftext = Column(String)
    created_utc = Column(DateTime)
    gilded = Column(Integer)
    upvote_ratio = Column(Float)
    num_comments = Column(Integer)
    preview = Column(JSON)
    thumbnail = Column(String)
    author = Column(String)
    subreddit = Column(String)

    comments = relationship("Comment", back_populates="post")
    subreddit_id = Column(String, ForeignKey('Subreddits.subreddit_id'))
    sub = relationship("Subreddit", back_populates="posts")
    author_id = Column(String, ForeignKey('Redditors.redditor_id'))
    user = relationship("User", back_populates="posts")

    def __init__(self, **attr):
        """
        creates a Post with the given attributes
        """
        assert isinstance(attr["submission_id"], str)
        assert isinstance(attr["title"], str)
        assert isinstance(attr["url"], str)
        assert isinstance(attr["score"], int) and attr["score"] >= 0
        assert isinstance(attr["created_utc"], date)
        assert isinstance(attr["over_18"], bool)
        assert isinstance(attr["is_self"], bool)
        assert isinstance(attr["selftext"], str)
        assert isinstance(attr["gilded"], int) and attr["gilded"] >= 0
        assert isinstance(attr["subreddit_id"], str)
        assert isinstance(attr["author_id"], str)
        assert isinstance(attr["upvote_ratio"], float)
        assert isinstance(attr["num_comments"], int)
        assert isinstance(attr["preview"], str)
        assert isinstance(attr["thumbnail"], str)
        assert isinstance(attr["author"], str)
        assert isinstance(attr["subreddit"], str)

        self.submission_id = attr["submission_id"]
        self.title = attr["title"]
        self.url = attr["url"]
        self.score = attr["score"]
        self.created_utc = attr["created_utc"]
        self.over_18 = attr["over_18"]
        self.is_self = attr["is_self"]
        self.selftext = attr["selftext"]
        self.gilded = attr["gilded"]
        self.subreddit_id = attr["subreddit_id"]
        self.author_id = attr["author_id"]
        self.upvote_ratio = attr["upvote_ratio"]
        self.num_comments = attr["num_comments"]
        self.preview = attr["preview"]
        self.thumbnail = attr["thumbnail"]
        self.author = attr["author"]
        self.subreddit = attr["subreddit"]

# ------------
# Comment
# ------------


class Comment(Base):
    __tablename__ = 'Comments'

    comment_id = Column(String, primary_key=True)
    body = Column(String)
    body_html = Column(String)
    score = Column(Integer)
    created_utc = Column(DateTime)
    gilded = Column(Integer)
    edited = Column(DateTime)
    author = Column(String)
    link_id = Column(String, ForeignKey('Submissions.submission_id'))
    post = relationship("Post", back_populates="comments")
    author_id = Column(String, ForeignKey('Redditors.redditor_id'))
    user = relationship("User", back_populates="comments")

    def __init__(self, **attr):
        """
        creates a Comment with the given attributes
        """
        assert isinstance(attr["comment_id"], str)
        assert isinstance(attr["body"], str)
        assert isinstance(attr["body_html"], str)
        assert isinstance(attr["score"], int) and attr["score"] >= 0
        assert isinstance(attr["created_utc"], date)
        assert isinstance(attr["edited"], date)
        assert isinstance(attr["gilded"], int) and attr["gilded"] >= 0
        assert isinstance(attr["author"], str)
        assert isinstance(attr["link_id"], str)
        assert isinstance(attr["subreddit_id"], str)
        assert isinstance(attr["author_id"], str)

        self.comment_id = attr["comment_id"]
        self.body = attr["body"]
        self.body_html = attr["body_html"]
        self.score = attr["score"]
        self.created_utc = attr["created_utc"]
        self.gilded = attr["gilded"]
        self.edited = attr["edited"]
        self.author = attr["author"]
        self.link_id = attr["link_id"]
        self.subreddit_id = attr["subreddit_id"]
        self.author_id = attr["author_id"]
