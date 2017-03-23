import flask
import logging

logging.getLogger().setLevel(logging.INFO)

app = flask.Flask(__name__)

@app.route('/dist/<path:path>')
def serve_statics(path):
    return flask.send_from_directory('../www/dist/', path)

@app.route('/api/<path:path>')
def serve_api(path):
    return 'TODO'

@app.route('/<path:path>')
def serve_index(path):
    return flask.send_from_directory('../www', 'index.html')
