import flask
import logging

logging.getLogger().setLevel(logging.INFO)

app = flask.Flask(__name__)

@app.route('/')
def serve_index():
    return flask.send_from_directory('../www', 'index.html')

@app.route('/<path:path>')
def serve_statics(path):
    return flask.send_from_directory('../www', path)
