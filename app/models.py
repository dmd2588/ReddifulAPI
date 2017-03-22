from sqlalchemy.ext.declarative import declarative_base
from sqlalchemy import Column, Integer, String, Boolean, ForeignKey
from sqlalchemy.orm import relationship

Base = declarative_base()

class User(Base):
    __tablename__ = 'users'
        
    id = Column(String, primary_key=True)
    username = Column(String)
    link_karma = Column(Integer)
    comment_karma = Column(Integer)
    created = Column(Integer)
    email = Column(String)
    posts = relationship("Post", back_populates="users")
    comments = relationship("Comment", back_populates="users")
    
class Subreddit(Base):
    __tablename__ = 'subreddits'
    
    id = Column(String, primary_key=True)
    name = Column(String)
    count_subs = Column(Integer)
    accounts_active = Column(Integer)
    title = Column(String)
    created = Column(Integer)
    posts = relationship("Post", back_populates="subreddits")
    
class Post(Base):    
    __tablename__ = 'posts'
    
    id = Column(String, primary_key=True)
    title = Column(String)
    url = Column(String)
    score = Column(Integer)
    author = Column(String)
    nsfw = Column(Boolean)
    comments = relationship("Comment", back_populates="posts")
    sub_id = Column(String, ForeignKey('subreddits.id'))
    post = relationship("Subreddit", back_populates="posts")
    user_id = Column(String, ForeignKey('users.id'))
    user = relationship("User", back_populates="posts")

class Comment(Base):
    __tablename__ = 'comments'
        
    id = Column(String, primary_key=True)
    body = Column(String)
    score = Column(Integer)
    created = Column(String)
    author = Column(String)
    gilded = Column(Integer)
    post_id = Column(String, ForeignKey('posts.id'))
    post = relationship("Post", back_populates="comments")
    user_id = Column(String, ForeignKey('users.id'))
    user = relationship("User", back_populates="comments")
 