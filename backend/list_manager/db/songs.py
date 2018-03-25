from list_manager.db import db_session, list2dict, row2dict
from list_manager.db.tables import Song, SongListItem


@db_session
def get_all_songs(session):
    all_songs = session\
        .query(Song)\
        .all()
    return list2dict(all_songs)


def get_song(session, song_id):
    song = session\
        .query(Song)\
        .filter(Song.id == song_id)\
        .one_or_none()
    if song is None:
        return None
    return row2dict(song)


@db_session
def get_song_list(session):
    song_list = session\
        .query(SongListItem)\
        .all()
    song_ids = [song.song_id for song in song_list]
    song_list = session.query(Song)\
        .filter(Song.id.in_(song_ids))\
        .all()
    return list2dict(song_list)


@db_session
def add_song_to_list(session, song_id):
    song = SongListItem(song_id=song_id)
    session.add(song)
    session.commit()
    session.refresh(song)
    added_song = get_song(session, song_id)
    return added_song


@db_session
def remove_song_from_list(session, song_id):
    session.query(SongListItem)\
        .filter(SongListItem.song_id == song_id)\
        .delete()
    session.commit()
    removed_song = get_song(session, song_id)
