import flask
import logging
import json
import dummydata as dummydata
import query
import datetime
import decimal

logging.getLogger().setLevel(logging.INFO)

app = flask.Flask(__name__)

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

@app.route('/api/users')
def serve_user_list():
    return createJson(query.getUsers())

@app.route('/api/users/<string:user_id>')
def serve_user(user_id):
    u = query.getUser(user_id)
    if not u:
        return '', 404
    return createJson(u)

@app.route('/api/posts')
def serve_post_list():
    return createJson(query.getPosts())

@app.route('/api/posts/<string:post_id>')
def serve_post(post_id):
    p = query.getPost(post_id)
    if not p:
        return '', 404
    return createJson(p)

@app.route('/api/comments')
def serve_comment_list():
    return createJson(query.getComments())

@app.route('/api/comments/<string:comment_id>')
def serve_comment(comment_id):
    c = query.getComment(comment_id)
    if not c:
        return '', 404
    return createJson(c)

@app.route('/api/subreddits')
def serve_subreddit_list():
    return createJson(query.getSubs())

@app.route('/api/subreddits/<string:subreddit_id>')
def serve_subreddit(subreddit_id):
    s = query.getSub(subreddit_id)
    if not s:
        return '', 404
    return createJson(s)



@app.route('/<path:path>')
def serve_index(path):
    return flask.send_from_directory('../www', 'index.html')

@app.route('/')
def serve_root():
    return flask.send_from_directory('../www', 'index.html')

