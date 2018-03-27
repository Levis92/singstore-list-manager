import json
from list_manager import config
from list_manager.db import db_session
from list_manager.db.tables import Song


@db_session
def insert_json_data_into_db(session):
    with open(config.SONGS_JSON_URL) as f:
        songs = json.load(f)
        for song in songs:
            new_song = Song(
                title=song['title'],
                artist=song['artist'],
                cover_url=song['cover'])
            session.add(new_song)
        session.commit()


if __name__ == '__main__':
    insert_json_data_into_db()
