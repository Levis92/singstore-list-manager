import styled from 'styled-components';

export const Container = styled.main`
  display: grid;
  grid-template-columns: [header1] 50% [header2] 50%;
  grid-template-rows: [header] 10vh [main] 90vh;
  background-image: linear-gradient(
    to right,
    #b8cbb8 0%,
    #b8cbb8 0%,
    #b465da 0%,
    #cf6cc9 33%,
    #ee609c 66%,
    #ee609c 100%
  );
  height: 100vh;
  width: 100vw;
  position: fixed;
`

export const Header = styled.header`
  grid-column-start: header1;
  grid-column-end: span 2;
  grid-row-start: header;
  grid-row-end: header;
  height: 70px;
  display: flex;
  align-items: center;
  justify-content: center;
`

const SongsList = styled.article`
  width: 100%;
  box-sizing: border-box;
  padding: 0 25px;
  height: 85%;
  grid-row-start: main;
  grid-row-end: main;
`

export const AvailableSongs = SongsList.extend`
  grid-column-start: header1;
  grid-column-end: header1;
`

export const AddedSongs = SongsList.extend`
  grid-column-start: header2;
  grid-column-end: header2;
`

export const AddedTitle = styled.h2`
  padding: 0.2em 0.3em;
  margin: 1em 0;
  font-size: 1.5rem;
  color: #eee;
`
