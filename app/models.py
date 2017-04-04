#!/usr/bin/env python3

# pylint: disable = bad-whitespace
# pylint: disable = invalid-name
# pylint: disable = missing-docstring
# pylint: disable = too-many-instance-attributes

from sqlalchemy.ext.declarative import declarative_base
from sqlalchemy import Column, Integer, String, Boolean, ForeignKey, DateTime, Float, JSON
from sqlalchemy.orm import relationship
from sqlalchemy.sql.schema import Table

Base = declarative_base()

# association table for the many-to-many relationship between User and
# Subreddit
mods_table = Table('Mods', Base.metadata,
                       Column('redditor_id', Integer, ForeignKey('Redditors.id')),
                       Column('subreddit_id', Integer, ForeignKey('Subreddits.id')))

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
    posts = relationship("Post", back_populates="Redditors")
    comments = relationship("Comment", back_populates="Redditors")
    subreddits = relationship("Subreddit", secondary=mods_table)

    def __init__(self, **attr):
        """
        creates a User with given attributes
        """

        assert attr["redditor_id"] is str
        assert attr["name"] is str
        assert attr["link_karma"] >= 0 and attr["link_karma"] is int
        assert attr["comment_karma"] >= 0 and attr["comment_karma"] is int
        assert attr["created_utc_utc"] is datetime
        assert attr["is_gold"] is bool
        assert attr["verified"] is bool
        self.redditor_id = attr["redditor_id"]
        self.name = attr["name"]
        self.link_karma = attr["link_karma"]
        self.comment_karma = attr["comment_karma"]
        self.created_utc = attr["created_utc"]
        self.is_gold = attr["is_gold"]
        self.verified = attr["verified"]

    def getID(self):
        """
        returns ID of the user
        """
        return self.redditor_id

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
        return self.created_utc

    def isGilded(self):
        """
        returns if the user is gilded
        """
        return self.is_gold

    def isVerified(self):
        """
        returns if the user is verified
        """
        return self.verified

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
    posts = relationship("Post", back_populates="Subreddits")
    comments = relationship("Comments", back_populates="Subreddits")
    users = relationship("User", secondary=mods_table)

    def __init__(self, **attr):
        """
        creates a Subreddit with given attributes
        """
        assert attr["subreddit_id"] is str
        assert attr["display_name"] is str
        assert attr["subscribers"] >= 0 and attr["subscribers"] is int
        assert attr["accounts_active"] >= 0 and attr["accounts_active"] is int
        assert attr["created_utc"] is datetime
        assert attr["title"] is str
        assert attr["icon_img"] is str
        assert attr["banner_img"] is str

        self.subreddit_id = attr["subreddit_id"]
        self.display_name = attr["display_name"]
        self.subscribers = attr["subscribers"]
        self.accounts_active = attr["accounts_active"]
        self.created_utc = attr["created_utc"]
        self.title = attr["title"]
        self.icon_img = attr["icon_img"]
        self.banner_img = attr["banner_img"]

    def getID(self):
        """
        returns ID of the subreddit
        """
        return self.subreddit_id

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
        return self.created_utc

    def getIconImg(self):
        """
        returns the url of the icon image of the subreddit
        """
        return self.icon_img

    def getBannerImg(self):
        """
        returns the url of the banner image of the subreddit
        """
        return self.banner_img

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

    comments = relationship("Comment", back_populates="Submission")
    subreddit_id = Column(String, ForeignKey('Subreddits.id'))
    sub = relationship("Subreddit", back_populates="Submissions")
    author_id = Column(String, ForeignKey('Redditors.id'))
    user = relationship("User", back_populates="Submissions")

    def __init__(self, **attr):
        """
        creates a Post with the given attributes
        """
        assert attr["submission_id"] is str
        assert attr["title"] is str
        assert attr["url"] is str
        assert attr["score"] >= 0 and attr["score"] is int
        assert attr["created_utc"] is datetime
        assert attr["over_18"] is bool
        assert attr["is_self"] is bool
        assert attr["selftext"]is str
        assert attr["gilded"] >= 0 and attr["gilded"] is int
        assert attr["subreddit_id"] is str
        assert attr["author_id"] is str
        assert attr["upvote_ratio"] is float
        assert attr["num_comments"] is int
        assert attr["preview"] is JSON
        assert attr["thumbnail"] is str
        assert attr["author"] is str
        assert attr["subreddit"] is str

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

    def getID(self):
        """
        returns ID of the post
        """
        return self.submission_id

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

    def isOver_18(self):
        """
        returns if the post is over_18
        """
        return self.over_18

    def isText(self):
        """
        returns if the post is a self-post (text only)
        """
        return self.is_self

    def getText(self):
        """
        returns the text of the post if it is a self-post
        """
        return self.selftext

    def getTime(self):
        """
        returns the time created of the post
        """
        return self.created_utc

    def getGilded(self):
        """
        returns how many times the post was gilded
        """
        return self.gilded

    def getSubreddit(self):
        """
        returns name of the post's subreddit
        """
        return self.subreddit

    def getAuthor(self):
        """
        returns username of the post's author
        """
        return self.author

    def getSubredditID(self):
        """
        returns ID of the post's subreddit
        """
        return self.subreddit_id

    def getAuthorID(self):
        """
        returns ID of the post's author
        """
        return self.author_id

    def getUpvoteRatio(self):
        """
        returns the upvote ratio of the post
        """
        return self.upvote_ratio

    def getNumComments(self):
        """
        returns number of comments of the post
        """
        return self.num_comments

    def getPreview(self):
        """
        returns JSON of the preview of the post
        """
        return self.preview

    def getThumbnail(self):
        """
        returns the url of the thumbnail of the post
        """
        return self.thumbnail

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
    link_id = Column(String, ForeignKey('Submissions.id'))
    post = relationship("Post", back_populates="Comments")
    author_id = Column(String, ForeignKey('Redditors.id'))
    user = relationship("User", back_populates="Comments")
    subreddit_id = Column(String, ForeignKey('Subreddits.id'))
    sub = relationship("Subreddit", back_populates="Comments")

    def __init__(self, **attr):
        """
        creates a Comment with the given attributes
        """
        assert attr["comment_id"] is str
        assert attr["body"] is str
        assert attr["body_html"] is str
        assert attr["score"] >= 0 and attr["score"] is int
        assert attr["created_utc"] is datetime
        assert attr["edited"] is datetime
        assert attr["gilded"] >= 0 and attr["gilded"] is int
        assert attr["author"] is str
        assert attr["link_id"] is str
        assert attr["subreddit_id"] is str
        assert attr["author_id"] is str

        self.comment_id = attr["comment_id"]
        self.body = attr["body"]
        self.body_html = attr["body_html"]
        self.score = attr["score"]
        self.created_utc = attr["created_utc"]
        self.gilded = attr["gilded"]
        self.edited = attr["edited"]
        self.author= attr["author"]
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

    def getHTML(self):
        """
        returns the html representation of the body
        """
        return self.body_html

    def getKarma(self):
        """
        returns karma of the comment
        """
        return self.score

    def getTime(self):
        """
        returns time created of the comment
        """
        return self.created_utc

    def getGilded(self):
        """
        returns how many times the comment was gilded
        """
        return self.gilded

    def getEdited(self):
        """
        returns when the comment was edited
        """
        return self.edited

    def getAuthor(self):
        """
        returns the username of the author of the comment
        """
        return self.author

    def getLinkID(self):
        """
        returns ID of the comment's post
        """
        return self.link_id

    def getAuthorID(self):
        """
        returns ID of the comment's author
        """
        return self.redditor_id

    def getSubredditID(self):
        """
        returns ID of the comment's subreddit
        """
        return self.subreddit_id
