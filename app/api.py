import flask
import logging
import json
import app.dummydata as dummydata

logging.getLogger().setLevel(logging.INFO)

app = flask.Flask(__name__)

@app.route('/dist/<path:path>')
def serve_statics(path):
    return flask.send_from_directory('../www/dist/', path)

@app.route('/api/users')
def server_user_list():
    return json.dumps(dummydata.users)

@app.route('/api/users/<string:user_id>')
def serve_user(user_id):
    for u in dummydata.users:
      if u['id'] == user_id:
        return json.dumps(u)
    return '', 404

@app.route('/api/posts')
def serve_post_list():
    return json.dumps(dummydata.posts)

@app.route('/api/posts/<string:post_id>')
def serve_post(post_id):
    for p in dummydata.posts:
      if p['id'] == post_id:
        return json.dumps(p)
    return '', 404

@app.route('/api/comments')
def serve_comment_list():
    return json.dumps(dummydata.comments)

@app.route('/api/comments/<string:comment_id>')
def serve_comment(comment_id):
    for c in dummydata.comments:
      if c['id'] == comment_id:
        return json.dumps(c)
    return '', 404

@app.route('/api/subreddits')
def serve_subreddit_list():
    return json.dumps(dummydata.subreddits)

@app.route('/api/subreddits/<string:subreddit_id>')
def serve_subreddit(subreddit_id):
    for s in dummydata.subreddits:
      if s['id'] == subreddit_id:
        return json.dumps(s)
    return '', 404

@app.route('/<path:path>')
def serve_index(path):
    return flask.send_from_directory('../www', 'index.html')

@app.route('/')
def serve_root():
    return flask.send_from_directory('../www', 'index.html')
