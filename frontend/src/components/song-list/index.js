import React from 'react';
import { List, Song, CoverImage, Details, Title, Artist } from './style';


const SongList = ({songs, ready=true}) => {
  if (ready === false)
    return (
      <List>
        {Array(10).fill(null).map((e, i) => <SongItemPlaceholder key={i} />)}
      </List>
    )
  return (
    <List>
      {songs.map(song => <SongItem key={song.id} song={song} />)}
    </List>
  )
}

export default SongList;


const SongItem = ({song}) =>
  <Song>
    <CoverImage src={song.cover_url} alt="" />
    <Details>
      <Title>{song.title}</Title>
      <Artist>{song.artist}</Artist>
    </Details>
  </Song>


const SongItemPlaceholder = () =>
  <Song>
    <CoverImage secondary />
    <Details>
      <Title secondary />
      <Artist secondary />
    </Details>
  </Song>


