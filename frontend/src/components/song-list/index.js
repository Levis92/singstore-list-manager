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
  padding: 0;
  height: 100%;
  width: 100%;
  overflow-y: scroll;
`

const Song = styled.li`
  display: flex;
  align-items: center;
  height: 100px;
  width: 100%;
  margin: 5px 0;
  border-radius: 0.2em;
  background-image: linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%);
  box-shadow: 0 1px 1px 1px rgba(66,66,66,0.1);
`

const CoverImage = styled.img`
  height: 100%;
  border-radius: 0.2em 0 0 0.2em;
`

const Details = styled.section`
  display: flex;
  flex-direction: column;
  margin-left: 15px;
`

const Title = styled.h3`
  margin: 0;
  text-align: left;
  color: #555;
  font-weight: 600;
  font-size: 1rem;
`

const Artist = styled.h4`
  margin: 0;
  text-align: left;
  color: #777;
  font-weight: 400;
  font-size: 0.9rem;
`