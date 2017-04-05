import unittest, requests

HOST_URL = 'http://localhost'
API_URL = HOST_URL + '/api'

class TestUsers(unittest.TestCase):

    properties = {'name', 'verified', 'redditor_id', 'created_utc', 'link_karma',
                  'is_gold', 'comment_karma'}

    def test_get_all(self):
        resp = requests.get(API_URL + "/users")
        self.assertEqual(resp.status_code, 200)
        self.assertEqual(resp.headers['content-type'], 'application/json; charset=utf-8')
        users = resp.json()
        self.assertEqual(type(users), list)
        self.assertGreater(len(users), 0)
        for u in users:
          self.assertSetEqual(set(u.keys()), TestUsers.properties)

    def test_get_specific(self):
        resp = requests.get(API_URL + "/users/lcaru")
        self.assertEqual(resp.status_code, 200)
        self.assertEqual(resp.headers['content-type'], 'application/json; charset=utf-8')
        user = resp.json()
        self.assertEqual(type(user), dict)
        self.assertSetEqual(set(user.keys()), TestUsers.properties)

    def test_get_nonexistent(self):
        resp = requests.get(API_URL + "/users/foobar")
        self.assertEqual(resp.status_code, 404)
        self.assertEqual(resp.headers['content-length'], '0')

class TestComments(unittest.TestCase):

    properties = {'comment_id', 'body', 'score', 'gilded', 'edited', 'author_id',
                  'body_html', 'created_utc', 'link_id', 'author'}

    def test_get_all(self):
        resp = requests.get(API_URL + "/comments")
        self.assertEqual(resp.status_code, 200)
        self.assertEqual(resp.headers['content-type'], 'application/json; charset=utf-8')
        comments = resp.json()
        self.assertEqual(type(comments), list)
        self.assertGreater(len(comments), 0)
        for c in comments:
          self.assertSetEqual(set(c.keys()), TestComments.properties)

    def test_get_specific(self):
        resp = requests.get(API_URL + "/comments/dezhft9")
        self.assertEqual(resp.status_code, 200)
        self.assertEqual(resp.headers['content-type'], 'application/json; charset=utf-8')
        comment = resp.json()
        self.assertEqual(type(comment), dict)
        self.assertSetEqual(set(comment.keys()), TestComments.properties)

    def test_get_nonexistent(self):
        resp = requests.get(API_URL + "/comments/foobar")
        self.assertEqual(resp.status_code, 404)
        self.assertEqual(resp.headers['content-length'], '0')

class TestPosts(unittest.TestCase):

    properties = {'url', 'thumbnail', 'subreddit_id', 'subreddit', 'is_self',
                  'title', 'author_id', 'num_comments', 'gilded', 'preview', 'over_18',
                  'author', 'submission_id', 'score', 'upvote_ratio', 'created_utc', 'selftext'}

    def test_get_all(self):
        resp = requests.get(API_URL + "/posts")
        self.assertEqual(resp.status_code, 200)
        self.assertEqual(resp.headers['content-type'], 'application/json; charset=utf-8')
        posts = resp.json()
        self.assertEqual(type(posts), list)
        self.assertGreater(len(posts), 0)
        for p in posts:
          self.assertSetEqual(set(p.keys()), TestPosts.properties)

    def test_get_specific(self):
        resp = requests.get(API_URL + "/posts/5zmhoe")
        self.assertEqual(resp.status_code, 200)
        self.assertEqual(resp.headers['content-type'], 'application/json; charset=utf-8')
        post = resp.json()
        self.assertEqual(type(post), dict)
        self.assertSetEqual(set(post.keys()), TestPosts.properties)

    def test_get_nonexistent(self):
        resp = requests.get(API_URL + "/posts/foobar")
        self.assertEqual(resp.status_code, 404)
        self.assertEqual(resp.headers['content-length'], '0')

class TestSubreddits(unittest.TestCase):

    properties = {'subscribers', 'accounts_active', 'banner_img', 'title', 'icon_img',
                  'display_name', 'subreddit_id', 'created_utc'}

    def test_get_all(self):
        resp = requests.get(API_URL + "/subreddits")
        self.assertEqual(resp.status_code, 200)
        self.assertEqual(resp.headers['content-type'], 'application/json; charset=utf-8')
        subreddits = resp.json()
        self.assertEqual(type(subreddits), list)
        self.assertGreater(len(subreddits), 0)
        for r in subreddits:
          self.assertSetEqual(set(r.keys()), TestSubreddits.properties)

    def test_get_specific(self):
        resp = requests.get(API_URL + "/subreddits/2qqjc")
        self.assertEqual(resp.status_code, 200)
        self.assertEqual(resp.headers['content-type'], 'application/json; charset=utf-8')
        subreddit = resp.json()
        self.assertEqual(type(subreddit), dict)
        self.assertSetEqual(set(subreddit.keys()), TestSubreddits.properties)

    def test_get_nonexistent(self):
        resp = requests.get(API_URL + "/subreddits/foobar")
        self.assertEqual(resp.status_code, 404)
        self.assertEqual(resp.headers['content-length'], '0')

class TestWebPages(unittest.TestCase):
  
    urls = [
      HOST_URL + '/users',
      HOST_URL + '/posts',
      HOST_URL + '/comments',
      HOST_URL + '/subreddits',
      HOST_URL + '/users/foobar',
      HOST_URL + '/posts/foobar',
      HOST_URL + '/comments/foobar',
      HOST_URL + '/subreddits/foobar',
    ]
    
    def test_getwebpages(self):
        for url in TestWebPages.urls:
            resp = requests.get(url)
            self.assertEqual(resp.status_code, 200)
            self.assertEqual(resp.headers['content-type'], 'text/html; charset=utf-8')
            self.assertNotEqual(resp.headers['content-length'], '0')

if __name__ == "__main__":
  unittest.main()
