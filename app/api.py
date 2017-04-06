import datetime
import decimal
import json
import logging
import flask
import unittest
from io import StringIO
import app.query as query
from app.tests.test_http import TestUsers
from app.tests.test_models import TestModels

logging.getLogger().setLevel(logging.INFO)

app = flask.Flask(__name__)

DEFAULT_HEADERS = {
    'Content-Type': 'application/json; charset=utf-8'
}

TEXT_HEADER = {
    'Content-Type': 'text/plain'
}


def alchemyencoder(obj):
    """JSON encoder function for SQLAlchemy special classes."""
    if isinstance(obj, datetime.date):
        return obj.isoformat()
    elif isinstance(obj, decimal.Decimal):
        return float(obj)


def createJson(r):
    return json.dumps(r, default=alchemyencoder)


@app.route('/dist/<path:path>')
def serve_statics(path):
    return flask.send_from_directory('../www/dist/', path)


@app.route('/api/tests')
def serve_tests():
    test_output = StringIO()
    integration_suite = unittest.TestLoader().loadTestsFromTestCase(TestUsers)
    models_suite = unittest.TestLoader().loadTestsFromTestCase(TestModels)
    all_tests = unittest.TestSuite([integration_suite, models_suite])
    unittest.TextTestRunner(stream=test_output, verbosity=2).run(all_tests)
    return test_output.getvalue(), 200, TEXT_HEADER


@app.route('/api/users')
def serve_user_list():
    args = format_url_args()
    user_order_by = {'name', 'comment_karma', 'link_karma', 'created_utc'}
    if 'order_by' in args:
        if args['order_by'] not in user_order_by:
            args.pop('order_by', None)
    if 'order_by' not in args and 'desc' in args:
        args.pop('desc', None)
    return createJson(query.getUsers(**args)[0]), 200, DEFAULT_HEADERS


@app.route('/api/users/<string:user_id>')
def serve_user(user_id):
    u = query.getUser(user_id)
    if not u:
        return '', 404
    return createJson(u), 200, DEFAULT_HEADERS


@app.route('/api/posts')
def serve_post_list():
    args = format_url_args()
    user_order_by = {'score', 'gilded', 'title', 'num_comments', 'author'}
    if 'order_by' in args:
        if args['order_by'] not in user_order_by:
            args.pop('order_by', None)
    if 'order_by' not in args and 'desc' in args:
        args.pop('desc', None)
    return createJson(query.getPosts(**args)[0]), 200, DEFAULT_HEADERS


@app.route('/api/posts/<string:post_id>')
def serve_post(post_id):
    p = query.getPost(post_id)
    if not p:
        return '', 404
    return createJson(p), 200, DEFAULT_HEADERS


@app.route('/api/comments')
def serve_comment_list():
    args = format_url_args()
    user_order_by = {'score', 'gilded', 'title', 'created_utc', 'author', 'body'}
    if 'order_by' in args:
        if args['order_by'] not in user_order_by:
            args.pop('order_by', None)
    if 'order_by' not in args and 'desc' in args:
        args.pop('desc', None)
    return createJson(query.getComments(**args)[0]), 200, DEFAULT_HEADERS


@app.route('/api/comments/<string:comment_id>')
def serve_comment(comment_id):
    c = query.getComment(comment_id)
    if not c:
        return '', 404
    return createJson(c), 200, DEFAULT_HEADERS


@app.route('/api/subreddits')
def serve_subreddit_list():
    args = format_url_args()
    user_order_by = {'accounts_active', 'subscribers', 'title', 'created_utc', 'display_name'}
    if 'order_by' in args:
        if args['order_by'] not in user_order_by:
            args.pop('order_by', None)
    if 'order_by' not in args and 'desc' in args:
        args.pop('desc', None)
    return createJson(query.getSubs(**args)[0]), 200, DEFAULT_HEADERS


@app.route('/api/subreddits/<string:subreddit_id>')
def serve_subreddit(subreddit_id):
    s = query.getSub(subreddit_id)
    if not s:
        return '', 404
    return createJson(s), 200, DEFAULT_HEADERS


@app.route('/<path:path>')
def serve_index(path):
    # pylint: disable=unused-argument
    return flask.send_from_directory('../www', 'index.html')


@app.route('/')
def serve_root():
    return flask.send_from_directory('../www', 'index.html')


def format_url_args():
    args = {}
    if 'page' in flask.request.args:
        args['page'] = int(flask.request.args['page'])
    if 'per_page' in flask.request.args:
        args['per_page'] = int(flask.request.args['per_page'])
    if 'order_by' in flask.request.args:
        args['order_by'] = flask.request.args['order_by']
    if 'desc' in flask.request.args:
        args['desc'] = True
    return args
