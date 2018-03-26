import React from 'react';
import {
  List,
  Song,
  CoverImage,
  Details,
  Title,
  Artist,
  AddRemoveIcon,
  IconWrapper
} from './style';


const SongList = ({songs, addedSongs, fetchAddedSongs, ready=true}) => {
  if (ready === false)
    return (
      <List>
        {
          Array(10).fill(null).map(
            (e, i) => <SongItemPlaceholder key={i} />
          )
        }
      </List>
    )
  return (
    <List>
      {
        songs.map(
          song => 
            <SongItem
              key={song.id}
              song={song}
              added={isIn(song, addedSongs)}
              fetchAddedSongs={fetchAddedSongs}
            />)
      }
    </List>
  )
}

export default SongList;


const SongItem = ({song, added, fetchAddedSongs}) => {
  const HOST = process.env.REACT_APP_API_HOST;

  const clickIcon = () => {
    if (added) {
      removeSong(song);
    } else {
      addSong(song);
    }
    fetchAddedSongs();
  }

  const addSong = (song) =>
    fetch(
      `${HOST}/songs/list/add/${song.id}`,
      { method: 'POST' }
    );

  const removeSong = (song) =>
    fetch(
      `${HOST}/songs/list/remove/${song.id}`,
      { method: 'DELETE' }
    );

  return (
    <Song>
      <CoverImage src={song.cover_url} alt="" />
      <Details>
        <Title>{song.title}</Title>
        <Artist>{song.artist}</Artist>
      </Details>
      <Icon added={added} clickIcon={clickIcon} />
    </Song>
  )
}


const SongItemPlaceholder = () =>
  <Song>
    <CoverImage secondary />
    <Details>
      <Title secondary />
      <Artist secondary />
    </Details>
  </Song>


const Icon = ({added, clickIcon}) =>
  <IconWrapper onClick={clickIcon}>
    <AddRemoveIcon primary={added} viewBox="0 0 170 170" >
      <g id="Add-icon" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
        <path d="M80,80 L80,38 C80,35.2385763 82.2385763,33 85,33 C87.7614237,33 90,35.2385763
                90,38 L90,80 L133,80 C135.761424,80 138,82.2385763 138,85 C138,87.7614237
                135.761424,90 133,90 L90,90 L90,133 C90,135.761424 87.7614237,138 85,138
                C82.2385763,138 80,135.761424 80,133 L80,90 L38,90 C35.2385763,90 33,87.7614237
                33,85 C33,82.2385763 35.2385763,80 38,80 L80,80 Z"
                id="Combined-Shape" fill="#D8D8D8"></path>
        <circle id="Oval" stroke="#D8D8D8" strokeWidth="10" cx="85" cy="85" r="78"></circle>
      </g>
    </AddRemoveIcon>
  </IconWrapper>


const isIn = (song, songList) => {
  const ids = songList.map(song => song.id);
  return ids.includes(song.id);
}
