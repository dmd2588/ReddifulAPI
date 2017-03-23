#!/usr/bin/env python3

# pylint: disable = bad-whitespace
# pylint: disable = invalid-name
# pylint: disable = missing-docstring
# pylint: disable = too-many-instance-attributes

from sqlalchemy.ext.declarative import declarative_base
from sqlalchemy import Column, Integer, String, Boolean, ForeignKey
from sqlalchemy.orm import relationship
from sqlalchemy.sql.schema import Table

Base = declarative_base()

#association table for the many-to-many relationship between User and Subreddit
user_sub_table = Table('users_subs', Base.metadata,
                       Column('user_id', Integer, ForeignKey('users.id')),
                       Column('sub_id', Integer, ForeignKey('subreddits.id')))

# ------------
# User
# ------------

class User(Base):
    __tablename__ = 'users'

    user_id = Column(String, primary_key=True)
    name = Column(String)
    link_karma = Column(Integer)
    comment_karma = Column(Integer)
    created = Column(Integer)
    email = Column(String)
    posts = relationship("Post", back_populates="users")
    comments = relationship("Comment", back_populates="users")
    subreddits = relationship("Subreddit", secondary=user_sub_table)

    def __init__(self, **attr):
        """
        creates a User with given attributes
        """

        assert attr["id"] is str
        assert attr["name"] is str
        assert attr["link_karma"] >= 0 and attr["link_karma"] is int
        assert attr["comment_karma"] >= 0 and attr["comment_karma"] is int
        assert attr["created"] >= 0 and attr["created"] is int
        assert attr["email"] is str
        self.user_id = attr["id"]
        self.name = attr["name"]
        self.link_karma = attr["link_karma"]
        self.comment_karma = attr["comment_karma"]
        self.created = attr["created"]
        self.email = attr["email"]


    def getID(self):
        """
        returns ID of the user
        """
        return self.user_id

    def getName(self):
        """
        returns name of the user
        """
        return self.name

    def getLKarma(self):
        """
        returns link karma of the user
        """
        return self.link_karma

    def getCKarma(self):
        """
        returns comment karma of the user
        """
        return self.comment_karma

    def getAge(self):
        """
        returns time created of the user
        """
        return self.created

    def getEmail(self):
        """
        returns email of the user
        """
        return self.email

# ------------
# Subreddit
# ------------

class Subreddit(Base):
    __tablename__ = 'subreddits'

    sub_id = Column(String, primary_key=True)
    display_name = Column(String)
    subscribers = Column(Integer)
    accounts_active = Column(Integer)
    title = Column(String)
    created = Column(Integer)
    posts = relationship("Post", back_populates="subreddits")
    comments = relationship("Comments", back_populates="subreddits")
    users = relationship("User", secondary=user_sub_table)

    def __init__(self, **attr):
        """
        creates a Subreddit with given attributes
        """
        assert attr["id"] is str
        assert attr["display_name"] is str
        assert attr["subscribers"] >= 0 and attr["subscribers"] is int
        assert attr["accounts_active"] >= 0 and attr["accounts_active"] is int
        assert attr["created"] >= 0 and attr["created"] is int
        assert attr["title"] is str

        self.sub_id = attr["id"]
        self.display_name = attr["display_name"]
        self.subscribers = attr["subscribers"]
        self.accounts_active = attr["accounts_active"]
        self.created = attr["created"]
        self.title = attr["title"]

    def getID(self):
        """
        returns ID of the subreddit
        """
        return self.sub_id

    def getName(self):
        """
        returns name of the subreddit
        """
        return self.display_name

    def getSubscribers(self):
        """
        returns number of subscribers of the subreddit
        """
        return self.subscribers

    def getVisitors(self):
        """
        returns number of current visitors of the subreddit
        """
        return self.accounts_active

    def getTitle(self):
        """
        returns the title of the subreddit
        """
        return self.title

    def getAge(self):
        """
        returns the time created of the subreddit
        """
        return self.created

# ------------
# Post
# ------------

class Post(Base):
    __tablename__ = 'posts'

    post_id = Column(String, primary_key=True)
    title = Column(String)
    url = Column(String)
    score = Column(Integer)
    nsfw = Column(Boolean)
    self_post = Column(Boolean)
    self_text = Column(String)
    created = Column(Integer)
    gilded = Column(Integer)
    comments = relationship("Comment", back_populates="posts")
    subreddit_id = Column(String, ForeignKey('subreddits.id'))
    sub = relationship("Subreddit", back_populates="posts")
    author_id = Column(String, ForeignKey('users.id'))
    author = relationship("User", back_populates="posts")

    def __init__(self, **attr):
        """
        creates a Post with the given attributes
        """
        assert attr["id"] is str
        assert attr["title"] is str
        assert attr["url"] is str
        assert attr["score"] >= 0 and attr["score"] is int
        assert attr["created"] >= 0 and attr["created"] is int
        assert attr["nsfw"] is bool
        assert attr["self_post"] is bool
        assert attr["self_text"]is str
        assert attr["gilded"] >= 0 and attr["gilded"] is int
        assert attr["subreddit_id"] is str
        assert attr["author_id"] is str

        self.post_id = attr["id"]
        self.title = attr["title"]
        self.url = attr["url"]
        self.score = attr["score"]
        self.created = attr["created"]
        self.nsfw = attr["nsfw"]
        self.self_post = attr["self_post"]
        self.self_text = attr["self_text"]
        self.gilded = attr["gilded"]
        self.subreddit_id = attr["subreddit_id"]
        self.author_id = attr["author_id"]

    def getID(self):
        """
        returns ID of the post
        """
        return self.post_id

    def getTitle(self):
        """
        returns title of the post
        """
        return self.title

    def getURL(self):
        """
        returns URL of the post
        """
        return self.url

    def getKarma(self):
        """
        returns karma of the post
        """
        return self.score

    def isNSFW(self):
        """
        returns if the post is NSFW
        """
        return self.nsfw

    def isText(self):
        """
        returns if the post is a self-post (text only)
        """
        return self.self_post

    def getText(self):
        """
        returns the text of the post if it is a self-post
        """
        return self.self_text

    def getTime(self):
        """
        returns the time created of the post
        """
        return self.created

    def getGilded(self):
        """
        returns how many times the post was gilded
        """
        return self.gilded

    def getSubredditID(self):
        """
        returns ID of the post's subreddit
        """
        return self.subreddit_id

    def getAuthorID(self):
        """
        returns ID of the post
        """
        return self.author_id

# ------------
# Comment
# ------------

class Comment(Base):
    __tablename__ = 'comments'

    comment_id = Column(String, primary_key=True)
    body = Column(String)
    score = Column(Integer)
    created = Column(String)
    gilded = Column(Integer)
    edited = Column(Boolean)
    link_id = Column(String, ForeignKey('posts.id'))
    post = relationship("Post", back_populates="comments")
    author_id = Column(String, ForeignKey('users.id'))
    author = relationship("User", back_populates="comments")
    subreddit_id = Column(String, ForeignKey('subreddits.id'))
    sub = relationship("Subreddit", back_populates="comments")

    def __init__(self, **attr):
        """
        creates a Comment with the given attributes
        """
        assert attr["id"] is str
        assert attr["body"] is str
        assert attr["score"] >= 0 and attr["score"] is int
        assert attr["created"] >= 0 and attr["created"] is int
        assert attr["edited"] is bool
        assert attr["gilded"] >= 0 and attr["gilded"] is int
        assert attr["link_id"] is str
        assert attr["subreddit_id"] is str
        assert attr["author_id"] is str

        self.comment_id = attr["id"]
        self.body = attr["body"]
        self.score = attr["score"]
        self.created = attr["created"]
        self.gilded = attr["gilded"]
        self.edited = attr["edited"]
        self.link_id = attr["link_id"]
        self.subreddit_id = attr["subreddit_id"]
        self.author_id = attr["author_id"]

    def getID(self):
        """
        returns ID of the comment
        """
        return self.comment_id

    def getText(self):
        """
        returns the text of the comment
        """
        return self.body

    def getKarma(self):
        """
        returns karma of the comment
        """
        return self.score

    def getTime(self):
        """
        returns time created of the comment
        """
        return self.created

    def getGilded(self):
        """
        returns how many times the comment was gilded
        """
        return self.gilded

    def isEdited(self):
        """
        returns if the comment was edited
        """
        return self.edited

    def getLinkID(self):
        """
        returns ID of the comment's post
        """
        return self.link_id

    def getAuthorID(self):
        """
        returns ID of the comment's author
        """
        return self.user_id

    def getSubredditID(self):
        """
        returns ID of the comment's subreddit
        """
        return self.subreddit_id
 