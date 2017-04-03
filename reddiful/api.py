import flask
import logging
from flask.json import jsonify

logging.getLogger().setLevel(logging.INFO)

app = flask.Flask(__name__)

users = [
  {
    'comment_karma': 190,
    'created': 1405828618.0,
    'email': 'None',
    'id': 'hh8mr',
    'link_karma': 335,
    'name': 'batman_jr'
  },
  {
    'comment_karma': 25418,
    'created': 1331171212.0,
    'email': 'poizan@poizan.dk',
    'id': '74344',
    'link_karma': 768,
    'name': 'poizan42'
  },
  {
    'comment_karma': 56846,
    'created': 1287044616.0,
    'email': 'ooer@live.com',
    'id': '4fer6',
    'link_karma': 18834,
    'name': 'Ooer'
  }
]

@app.route('/dist/<path:path>')
def serve_statics(path):
    return flask.send_from_directory('../www/dist/', path)

@app.route('/api/users/')
def serve_api_user():
    return jsonify(users)

@app.route('/<path:path>')
def serve_index(path):
    return flask.send_from_directory('../www', 'index.html')

@app.route('/')
def serve_root():
    return flask.send_from_directory('../www', 'index.html')
