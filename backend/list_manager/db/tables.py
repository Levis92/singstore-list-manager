import os
import sys
from sqlalchemy import Column, ForeignKey, Integer, String
from sqlalchemy.ext.declarative import declarative_base
from sqlalchemy.orm import relationship
from list_manager import config
from list_manager.db import connection
 
Base = declarative_base()
 
class Song(Base):
    __tablename__ = 'song'

    id = Column(Integer, primary_key=True)
    title = Column(String(250), nullable=False)
    artist = Column(String(250), nullable=False)
    cover_url = Column(String(250), nullable=False)
 
class SongListItem(Base):
    __tablename__ = 'added_song'

    id = Column(Integer, primary_key=True)
    song_id = Column(Integer, ForeignKey('song.id'), unique=True)
    song = relationship(Song)

 
# Create all tables in the engine. This is equivalent to "Create Table"
# statements in raw SQL.
Base.metadata.create_all(connection)