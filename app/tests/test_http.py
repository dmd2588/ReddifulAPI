import unittest
import requests
import os

PORT = '80' if 'FLASK_PORT' not in os.environ else os.environ['FLASK_PORT']
HOST_URL = 'http://localhost:' + PORT
API_URL = HOST_URL + '/api'


class HttpModelsTest(unittest.TestCase):

    def setUp(self):
        self.models = [
            {
                'url_space': API_URL + '/users',
                'instance_id': 'lcaru',
                'properties': {'name', 'verified', 'redditor_id', 'created_utc', 'link_karma',
                               'is_gold', 'comment_karma'}
            },
            {
                'url_space': API_URL + '/comments',
                'instance_id': 'dezhft9',
                'properties': {'comment_id', 'body', 'score', 'gilded', 'edited', 'author_id',
                               'body_html', 'created_utc', 'link_id', 'author'}
            },
            {
                'url_space': API_URL + '/posts',
                'instance_id': '5zmhoe',
                'properties': {'url', 'thumbnail', 'subreddit_id', 'subreddit', 'is_self',
                               'title', 'author_id', 'num_comments', 'gilded', 'preview', 'over_18',
                               'author', 'submission_id', 'score', 'upvote_ratio', 'created_utc',
                               'selftext'}
            },
            {
                'url_space': API_URL + '/subreddits',
                'instance_id': '2qqjc',
                'properties': {'subscribers', 'accounts_active', 'banner_img', 'title', 'icon_img',
                               'display_name', 'subreddit_id', 'created_utc'}
            }
        ]

    def test_get_all(self):
        for model in self.models:
            resp = requests.get(model['url_space'])
            self.assertEqual(resp.status_code, 200)
            self.assertEqual(resp.headers['content-type'],
                             'application/json; charset=utf-8')
            container = resp.json()[0]
            self.assertEqual(type(container), list)
            self.assertGreater(len(container), 0)
            for instance in container:
                self.assertSetEqual(set(instance.keys()), model['properties'])

    def test_get_all_range(self):
        for model in self.models:
            resp1 = requests.get(model['url_space'] + "?page=1&per_page=2")
            self.assertEqual(resp1.status_code, 200)
            self.assertEqual(
                resp1.headers['content-type'], 'application/json; charset=utf-8')
            container1 = resp1.json()[0]
            self.assertEqual(type(container1), list)
            self.assertEqual(len(container1), 2)
            for instance in container1:
                self.assertSetEqual(set(instance.keys()), model['properties'])

            resp2 = requests.get(model['url_space'] + "?page=2&per_page=1")
            self.assertEqual(resp2.status_code, 200)
            self.assertEqual(
                resp2.headers['content-type'], 'application/json; charset=utf-8')
            container2 = resp2.json()[0]
            self.assertEqual(type(container2), list)
            self.assertEqual(len(container2), 1)
            self.assertDictEqual(container2[0], container1[0])

    def test_get_specific(self):
        for model in self.models:
            resp = requests.get(model['url_space'] +
                                "/" + model['instance_id'])
            self.assertEqual(resp.status_code, 200)
            self.assertEqual(resp.headers['content-type'],
                             'application/json; charset=utf-8')
            instance = resp.json()
            self.assertEqual(type(instance), dict)
            self.assertSetEqual(set(instance.keys()), model['properties'])

    def test_get_nonexistent(self):
        for model in self.models:
            resp = requests.get(model['url_space'] + "/foobar")
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
            self.assertEqual(
                resp.headers['content-type'], 'text/html; charset=utf-8')
            self.assertNotEqual(resp.headers['content-length'], '0')

if __name__ == "__main__":
    unittest.main()
