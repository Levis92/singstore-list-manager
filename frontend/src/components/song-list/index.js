import React from 'react';
import {
  List,
  Song,
  CoverImage,
  Details,
  Title,
  Artist,
  AddRemoveIcon
} from './style';


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
    <Icon added={false} />
  </Song>


const SongItemPlaceholder = () =>
  <Song>
    <CoverImage secondary />
    <Details>
      <Title secondary />
      <Artist secondary />
    </Details>
  </Song>


const Icon = ({added, clickIcon}) =>
  <AddRemoveIcon primary={added} viewBox="0 0 170 170" >
    <g id="Add-icon" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
      <path d="M80,80 L80,38 C80,35.2385763 82.2385763,33 85,33 C87.7614237,33 90,35.2385763
              90,38 L90,80 L133,80 C135.761424,80 138,82.2385763 138,85 C138,87.7614237
              135.761424,90 133,90 L90,90 L90,133 C90,135.761424 87.7614237,138 85,138
              C82.2385763,138 80,135.761424 80,133 L80,90 L38,90 C35.2385763,90 33,87.7614237
              33,85 C33,82.2385763 35.2385763,80 38,80 L80,80 Z"
              id="Combined-Shape" fill="#D8D8D8"></path>
      <circle id="Oval" stroke="#D8D8D8" strokeWidth="10" cx="85" cy="85" r="78"></circle>
      <rect className="btn" x="0" y="0" width="10" height="10" onClick={clickIcon} />
    </g>
  </AddRemoveIcon>

