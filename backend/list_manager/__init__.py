from flask import Flask, Response, jsonify
import json
from list_manager.util.exceptions import InvalidUsage
from list_manager.db.songs import (
    get_all_songs,
    get_song_list,
    add_song_to_list,
    remove_song_from_list
)

app = Flask(__name__)


@app.route('/')
@app.route('/api')
def api():
    return jsonify({
        'Get all songs': 'GET /songs',
        'Get song list': 'GET /songs/list',
        'Add song to list': 'POST /songs/add/<id>',
        'Remove song from list': 'DELETE /songs/remove/<id>'
    })


@app.route('/songs')
def get_songs():
    songs = get_all_songs()
    return jsonify(songs), 200


@app.route('/songs/list')
def get_list():
    song_list = get_song_list()
    return jsonify(song_list), 200


@app.route('/songs/list/add/<int:song_id>', methods=['POST'])
def add_song(song_id):
    added_song = add_song_to_list(song_id)
    if added_song is None:
        raise InvalidUsage("Song could not be found", 404)
    return jsonify(added_song), 201


@app.route('/songs/list/remove/<int:song_id>', methods=['DELETE'])
def remove_song(song_id):
    removed_song = remove_song_from_list(song_id)
    if removed_song is None:
        raise InvalidUsage("Song could not be found", 404)
    return jsonify(removed_song), 200


@app.errorhandler(InvalidUsage)
def handle_invalid_usage(error: InvalidUsage) -> Response:
    """Error handling for usage exception
    Args:
        error: Exception raised for usage error
    Returns: JSON Error response
    """
    response: Response = jsonify(error.to_dict())
    response.status_code = error.status_code
    return response
