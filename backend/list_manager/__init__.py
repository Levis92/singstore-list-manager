from flask import Flask, jsonify
import json
from list_manager.db.songs import get_all_songs


app = Flask(__name__)


@app.route('/')
@app.route('/api')
def api():
    return jsonify({
        'Get all songs': 'GET /songs',
        'Add song to list': 'POST /songs/add/<id>',
        'Remove song from list': 'DELETE /songs/remove/<id>'
    })


@app.route('/songs')
def get_songs():
    songs = get_all_songs()
    return jsonify(songs)


@app.route('/songs/add/<int:song_id>', methods=['POST'])
def add_song(song_id):
    pass


@app.route('/songs/remove/<int:song_id>', methods=['DELETE'])
def remove_song(song_id):
    pass
