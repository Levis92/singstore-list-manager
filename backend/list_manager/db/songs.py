from list_manager.db import db_session, list2dict
from list_manager.db.tables import Song


@db_session
def get_all_songs(session):
    all_songs = session.query(Song).all()
    return list2dict(all_songs)
