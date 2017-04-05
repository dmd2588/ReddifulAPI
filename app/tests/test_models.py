
# -------
# imports
# -------

import app.models, unittest, flask

# -----------
# TestModels
# -----------

class TestModels(unittest.TestCase):
    app = flask.Flask(__name__)
    
    # ----
    # Post
    # ----
    
    #test simple case to make sure it properly saves Post model to database and gets back the same data
    def test_posts(self):
        with app.test_request_context():
            post_ex = Post(id = "0", title = "First Post!", url = "imgur.com", score = 1, created = 1500, nsfw = False, self_post = False, self_text = "", gilded = 0, subreddit_id = "0", author_id = "0")
            db.session.add(post_ex)
            db.session.commit()
            
            post_query = db.session.query(Post).filter_by(title="First Post!").first()
            self.assertEqual(post_query.getURL(), "imgur.com")
            self.assertEqual(post_query.getTime(), 1500)
            self.assertEqual(post_query.getKarma(), 1)
            self.assertEqual(post_query.getID(), "0")
            self.assertFalse(post_query.isNSFW())
            self.assertFalse(post_query.isText())
            self.assertEqual(post_query.getText(), "")
            self.assertEqual(post_query.getGilded(), 0)
            self.assertEqual(post_query.getSubredditID(), "0")
            self.assertEqual(post_query.getAuthorID(), "0")
            
            db.session.delete(post)
            db.session.commit()
            
    #test case of adding multiple posts to the table, such that it properly filters by author_id
    def test_posts_1(self):
        with app.test_request_context():
            post_ex = Post(id = "0", title = "Post!", url = "imgur.com", score = 1, created = 1500, nsfw = False, self_post = False, self_text = "", gilded = 0, subreddit_id = "0", author_id = "1")
            post_ex_2 = Post(id = "1", title = "Post!", url = "imgur.com", score = 1, created = 1500, nsfw = False, self_post = False, self_text = "", gilded = 0, subreddit_id = "0", author_id = "0")
            post_ex_3 = Post(id = "2", title = "Post!", url = "imgur.com", score = 1, created = 1500, nsfw = False, self_post = False, self_text = "", gilded = 0, subreddit_id = "0", author_id = "1")
            post_ex_4 = Post(id = "3", title = "Post!", url = "imgur.com", score = 1, created = 1500, nsfw = False, self_post = False, self_text = "", gilded = 0, subreddit_id = "0", author_id = "0")
            db.session.add(post_ex)
            db.session.add(post_ex_2)
            db.session.add(post_ex_3)
            db.session.add(post_ex_4)
            db.session.commit()
            
            post_query = db.session.query(Post).filter_by(author_id="1")
            for i in range(len(post_query)): 
                p = post_query[i]               
                self.assertEqual(p.url, "imgur.com")
                self.assertEqual(p.title, "Post!")
                self.assertEqual(p.score, 1)
                self.assertEqual(p.id, str(i))
                self.assertFalse(p.nsfw)
                self.assertFalse(post_query.isText())
                self.assertEqual(post_query.getText(), "")
                self.assertEqual(post_query.getGilded(), 0)
                self.assertEqual(post_query.getSubredditID(), "0")
                self.assertEqual(post_query.getAuthorID(), "0")
                self.assertEqual(post_query.getTime(), 1500)
            
            db.session.delete(post)
            db.session.commit()
            
    #test simple case to make sure it properly saves Comment model to database and gets back the same data  
    def test_comments(self):
        with app.test_request_context():
            comment_ex = Comment(id = "0", body = "First Comment!", created = 1500, edited = True, score = 1, author_id = "1", subreddit_id = "2", link_id = "3", gilded = 2)
            db.session.add(comment_ex)
            db.session.commit()
            
            comment_query = db.session.query(Comment).filter_by(body="First Comment!").first()
            self.assertEqual(comment_query.created, 1500)
            self.assertEqual(comment_query.author_id, "1")
            self.assertEqual(comment_query.score, 1)
            self.assertEqual(comment_query.id, "0")
            self.assertEqual(comment_query.gilded, 2)
            self.assertTrue(comment_query.edited)
            self.assertEqual(comment_query.subreddit_id, "2")
            self.assertEqual(comment_query.link_id, "3")
            
            db.session.delete(comment)
            db.session.commit()
            
    #test case of adding multiple comments to the table, such that it properly filters by subreddit_id
    def test_comments_1(self):
        with app.test_request_context():
            comment_ex = Comment(id = "0", body = "Comment!", created = 1500, edited = True, score = 1, author_id = "1", subreddit_id = "2", link_id = "3", gilded = 2)
            comment_ex_2 = Comment(id = "1", body = "Comment!", created = 1500, edited = True, score = 1, author_id = "1", subreddit_id = "1", link_id = "3", gilded = 2)
            comment_ex_3 = Comment(id = "2", body = "Comment!", created = 1500, edited = True, score = 1, author_id = "1", subreddit_id = "1", link_id = "3", gilded = 2)
            comment_ex_4 = Comment(id = "3", body = "Comment!", created = 1500, edited = True, score = 1, author_id = "1", subreddit_id = "2", link_id = "3", gilded = 2)
            db.session.add(comment_ex)
            db.session.add(comment_ex_2)
            db.session.add(comment_ex_3)
            db.session.add(comment_ex_4)
            db.session.commit()
            
            comment_query = db.session.query(Comment).filter_by(subreddit_id="1")
            for i in range(len(comment_query)): 
                c = comment_query[i]               
                self.assertEqual(c.created, 1500)
                self.assertEqual(c.body, "Comment!")
                self.assertEqual(c.score, 1)
                self.assertEqual(c.id, str(i))
                self.assertEqual(comment_query.gilded, 2)            
            db.session.delete(comment) 
            db.session.commit()
            
    #test simple case to make sure it properly saves User model to database and gets back the same data            
    def test_users(self): 
        with app.test_request_context():
            user_ex = User(id = "0", name = "test_user", link_karma = 10, comment_karma = 1, created = 5, email = "ex@test.com")
            db.session.add(user_ex)
            db.session.commit()
            
            user_query = db.session.query(User).filter_by(name="test_user").first()
            self.assertEqual(user_query.email, "ex@test.com")
            self.assertEqual(user_query.link_karma, 10)
            self.assertEqual(user_query.comment_karma, 1)
            self.assertEqual(user_query.id, "0")
            self.assertEqual(user_query.created, 5)
            
            db.session.delete(user)
            db.session.commit()
            
    #test case of adding multiple users to the table, such that it properly filters by created
    def test_users_1(self):
        with app.test_request_context():
            user_ex = User(id = "0", name = "test_user", link_karma = 10, comment_karma = 1, created = 10, email = "ex@test.com")
            user_ex_2 = User(id = "1", name = "test_user", link_karma = 10, comment_karma = 1, created = 10, email = "ex@test.com")
            user_ex_3 = User(id = "2", name = "test_user", link_karma = 10, comment_karma = 1, created = 5, email = "ex@test.com")
            user_ex_4 = User(id = "3", name = "test_user", link_karma = 10, comment_karma = 1, created = 5, email = "ex@test.com")
            db.session.add(user_ex)
            db.session.add(user_ex_2)
            db.session.add(user_ex_3)
            db.session.add(user_ex_4)
            db.session.commit()
            
            user_query = db.session.query(User).filter_by(created = 10)
            for i in range(len(user_query)): 
                p = user_query[i]               
                self.assertEqual(p.name, "test_user")
                self.assertEqual(p.email, "ex@test.com")
                self.assertEqual(p.link_karma, 10)
                self.assertEqual(p.id, str(i))
                self.assertEqual(p.comment_karma, 1)
            
            db.session.delete(user)
            db.session.commit()
            
    #test simple case to make sure it properly saves Subreddit model to database and gets back the same data
    def test_subreddits(self):
        with app.test_request_context():
            subreddit_ex = Subreddit(id = "0", display_name = "First Subreddit!", title = "My first Sub", subscribers = 1, accounts_active = 0, created = 30)
            db.session.add(subreddit_ex)
            db.session.commit()
            
            subreddit_query = db.session.query(Subreddit).filter_by(display_name="First Subreddit!").first()
            self.assertEqual(subreddit_query.title, "My first Sub")
            self.assertEqual(subreddit_query.subscribers, 1)
            self.assertEqual(subreddit_query.accounts_active, 0)
            self.assertEqual(subreddit_query.id, "0")
            self.assertEqual(subreddit_query.created, 30)
            
            db.session.delete(subreddit)
            db.session.commit()
            
    #test case of adding multiple subreddits to the table, such that it properly filters by author_id
    def test_subreddits_1(self):
        with app.test_request_context():
            subreddit_ex = Subreddit(id = "0", display_name = "First Subreddit!", title = "My first Sub", subscribers = 1, accounts_active = 0, created = 30)
            subreddit_ex_2 = Subreddit(id = "1", display_name = "First Subreddit!", title = "My first Sub", subscribers = 1, accounts_active = 0, created = 30)
            subreddit_ex_3 = Subreddit(id = "2", display_name = "First Subreddit!", title = "My first Sub", subscribers = 100, accounts_active = 0, created = 30)
            subreddit_ex_4 = Subreddit(id = "3", display_name = "First Subreddit!", title = "My first Sub", subscribers = 100, accounts_active = 0, created = 30)
            db.session.add(subreddit_ex)
            db.session.add(subreddit_ex_2)
            db.session.add(subreddit_ex_3)
            db.session.add(subreddit_ex_4)
            db.session.commit()
            
            subreddit_query = db.session.query(Subreddit).filter_by(subscribers>100)
            for i in range(len(subreddit_query)): 
                p = subreddit_query[i]               
                self.assertEqual(p.display_name, "First Subreddit!")
                self.assertEqual(p.title, "My first Sub")
                self.assertEqual(p.accounts_active, 0)
                self.assertEqual(p.id, str(i))
                self.assertEqual(p.created, 30)
            
            db.session.delete(subreddit)
            db.session.commit()
     
    #test the one-to-many relaitonship between Post and Comment       
    def test_posts_comments(self):
        with app.test_request_context():
            post_ex = Post(id = "22", title = "First Post!", url = "imgur.com", score = 1, created = 1500, nsfw = False, self_post = False, self_text = "", gilded = 0, subreddit_id = "0", author_id = "0")
            db.session.add(post_ex)
            db.session.commit()
            
            comment_ex = Comment(id = "0", body = "First Comment!", created = 1500, edited = True, score = 1, author_id = "1", subreddit_id = "2", link_id = "22", gilded = 2)
            db.session.add(comment_ex)
            db.session.commit()
            
            comment_query = db.session.query(Comment).filter_by(body="First Comment!").first()
            comment_post = comment_query.post
            
            self.assertEqual(comment_post.getURL(), "imgur.com")
            self.assertEqual(comment_post.getTime(), 1500)
            self.assertEqual(comment_post.getKarma(), 1)
            self.assertEqual(comment_post.getID(), "22")
            self.assertFalse(comment_post.isNSFW())
            self.assertFalse(comment_post.isText())
            self.assertEqual(comment_post.getText(), "")
            self.assertEqual(comment_post.getGilded(), 0)
            self.assertEqual(comment_post.getSubredditID(), "0")
            self.assertEqual(comment_post.getAuthorID(), "0")
            
            post_query = db.session.query(Post).filter_by(title="First Post!").first()
            post_comment = post_query.comments.first()
            
            self.assertEqual(post_comment.created, 1500)
            self.assertEqual(post_comment.author_id, "1")
            self.assertEqual(post_comment.score, 1)
            self.assertEqual(post_comment.id, "0")
            self.assertEqual(post_comment.gilded, 2)
            self.assertTrue(post_comment.edited)
            self.assertEqual(post_comment.subreddit_id, "2")
            self.assertEqual(post_comment.link_id, "3")
            

            
            db.session.delete(post)
            db.session.commit()
            
            db.session.delete(comment)
            db.session.commit()
            
    #test the many-to-many relationship between User and Subreddit
    def test_users_subreddits(self):
        with app.test_request_context():
            subreddit_ex = Subreddit(id = "10", display_name = "First Subreddit!", title = "My first Sub", subscribers = 1, accounts_active = 0, created = 30)
            db.session.add(subreddit_ex)
            db.session.commit()
            
            user_ex = User(id = "20", name = "test_user", link_karma = 10, comment_karma = 1, created = 5, email = "ex@test.com")
            user_ex.subreddits.append(subreddit_ex)
            db.session.add(user_ex)
            db.session.commit()
            
            user_query = db.session.query(User).filter_by(name="test_user").first()
            user_subreddit = user_query.subreddits.first()
            self.assertEqual(user_subreddit.title, "My first Sub")
            self.assertEqual(user_subreddit.subscribers, 1)
            self.assertEqual(user_subreddit.accounts_active, 0)
            self.assertEqual(user_subreddit.id, "10")
            self.assertEqual(user_subreddit.created, 30)
            
            subreddit_query = db.session.query(Subreddit).filter_by(display_name="First Subreddit!").first()
            subreddit_user = subreddit_query.users.first()
            self.assertEqual(subreddit_user.email, "ex@test.com")
            self.assertEqual(subreddit_user.link_karma, 10)
            self.assertEqual(subreddit_user.comment_karma, 1)
            self.assertEqual(subreddit_user.id, "20")
            self.assertEqual(subreddit_user.created, 5)          
            
            
            db.session.delete(user)
            db.session.commit()
            
            db.session.delete(subreddit)
            db.session.commit()


if __name__ == '__main__':
    unittest.main()
