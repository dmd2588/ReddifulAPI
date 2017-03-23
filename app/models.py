from sqlalchemy.ext.declarative import declarative_base
from sqlalchemy import Column, Integer, String, Boolean, ForeignKey
from sqlalchemy.orm import relationship
from sqlalchemy.sql.schema import Table

Base = declarative_base()

user_sub_table = Table('users_subs', Base.metadata,
                       Column('user_id', Integer, ForeignKey('users.id')),
                       Column('sub_id', Integer, ForeignKey('subreddits.id')))

class User(Base):
    __tablename__ = 'users'
        
    id = Column(String, primary_key=True)
    name = Column(String)
    link_karma = Column(Integer)
    comment_karma = Column(Integer)
    created = Column(Integer)
    email = Column(String)
    posts = relationship("Post", back_populates="users")
    comments = relationship("Comment", back_populates="users")
    subs = relationship("Subreddit", secondary=user_sub_table)
    
    def __init__(self, id, name, link_karma, comment_karma, created, email):
        self.id = id
        self.name = name
        self.link_karma = link_karma
        self.comment_karma = comment_karma
        self.created = created
        self.email = email
        
    
    def getID(self):
        return id
    
    def getName(self):
        return name
    
    def getLKarma(self):
        return link_karma
    
    def getCKarma(self):
        return comment_karma
    
    def getAge(self):
        return created
    
    def getEmail(self):
        return email
    
class Subreddit(Base):
    __tablename__ = 'subreddits'
    
    id = Column(String, primary_key=True)
    display_name = Column(String)
    subscribers = Column(Integer)
    accounts_active = Column(Integer)
    title = Column(String)
    created = Column(Integer)
    posts = relationship("Post", back_populates="subreddits")
    comments = relationship("Comments", back_populates="subreddits")
    users = relationship("User", secondary=user_sub_table)
    
    def __init__(self, id, display_name, subscribers, accounts_active, created, title):
        self.id = id
        self.display_name = display_name
        self.subscribers = subscribers
        self.accounts_active = accounts_active
        self.created = created
        self.title = title
    
    def getID(self):
        return id
    
    def getName(self):
        return display_name
    
    def getSubscribers(self):
        return subscribers
    
    def getVisitors(self):
        return accounts_active
    
    def getTitle(self):
        return title
    
    def getAge(self):
        return created
    
class Post(Base):    
    __tablename__ = 'posts'
    
    id = Column(String, primary_key=True)
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
    
    def __init__(self, id, title, url, score, created, nsfw, self_post, self_text, created, gilded, subreddit_id, author_id):
        self.id = id
        self.title = title
        self.url = url
        self.score = score
        self.created = created
        self.nsfw = nsfw
        self.self_post = self_post
        self.self_text = self_text
        self.created = created
        self.gilded = gilded
        self.subreddit_id = subreddit_id
        self.author_id = author_id
        
    
    def getID(self):
        return id
    
    def getTitle(self):
        return title
    
    def getURL(self):
        return url
    
    def getKarma(self):
        return score
    
    def getAuthor(self):
        return author_id
    
    def isNSFW(self):
        return nsfw
    
    def isText(self):
        return self_post
    
    def getText(self):
        return self_text
    
    def getTime(self):
        return created
    
    def getGilded(self):
        return gilded
    
    def getSubredditID(self):
        return subreddit_id
    
    def getAuthorID(self):
        return author_id

class Comment(Base):
    __tablename__ = 'comments'
        
    id = Column(String, primary_key=True)
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
    
    def __init__(self, id, body, score, created, gilded, edited, link_id, subreddit_id, author_id):
        self.id = id
        self.body = body
        self.score = score
        self.created = created
        self.gilded = gilded
        self.edited = edited
        self.link_id = link_id
        self.subreddit_id = subreddit_id
        self.author_id = author_id
    
    def getID(self):
        return id
    
    def getText(self):
        return body
    
    def getKarma(self):
        return score
    
    def getTime(self):
        return created
        
    def getGilded(self):
        return gilded
    
    def isEdited(self):
        return edited
    
    def getLinkID(self):
        return link_id
    
    def getAuthorID(self):
        return user_id
    
    def getSubredditID(self):
        return subreddit_id
 