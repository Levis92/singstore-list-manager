from sqlalchemy import create_engine
from sqlalchemy.orm import sessionmaker
from sqlalchemy_utils import database_exists, create_database
from functools import wraps
from list_manager import config


def connect():
    user = config.USER
    password = config.PASSWORD
    host = config.HOST
    database = config.DATABASE
    url = f"postgresql://{user}:{password}@{host}/{database}"

    engine = create_engine(url, client_encoding='utf8')
    if not database_exists(engine.url):
        create_database(engine.url)

    return engine


connection = connect()


def db_session(db_func):
    def _decorator(*args, **kwargs):
        session = _create_db_session()
        response = db_func(session, *args, **kwargs)
        session.close()
        return response
    return wraps(db_func)(_decorator)


def _create_db_session():
    Session = sessionmaker(bind=connection)
    return Session()


def row2dict(row):
    return {
        column.name: str(getattr(row, column.name)) 
            for column in row.__table__.columns
    }

def list2dict(table_list):
    return [row2dict(song) for song in table_list]
