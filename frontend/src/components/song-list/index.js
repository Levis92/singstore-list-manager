import React from 'react';
import styled from 'styled-components';


const SongList = ({songs}) =>
  <List>
    {songs.map(song => <SongItem key={song.id} song={song} />)}
  </List>

export default SongList;

const SongItem = ({song}) =>
  <Song>
    <CoverImage src={song.cover_url} alt="" />
    <Details>
      <Title>{song.title}</Title>
      <Artist>{song.artist}</Artist>
    </Details>
  </Song>

const List = styled.ul`
  list-style: none;
`

const Song = styled.li`
  display: flex;
  align-items: center;
  height: 100px;
`

const CoverImage = styled.img`
  height: 100%;
`

const Details = styled.section`
  display: flex;
  flex-direction: column;
  margin-left: 15px;
`

const Title = styled.h3`
  margin: 0;
  text-align: left;
`

const Artist = styled.h4`
  margin: 0;
  text-align: left;
`