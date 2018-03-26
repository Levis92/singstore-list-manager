import React, { Component } from 'react';
import styled from 'styled-components';
import './App.css';
import SongList from './components/song-list/index';
import SearchBar from './components/searchbar/index';

class App extends Component {
  state = {
    allSongs: [],
    addedSongs: [],
    ready: false,
    searchKeyword: ""
  }

  componentWillMount() {
    this.fetchAllSongs();
  }

  fetchAllSongs = () => {
    fetch(`${process.env.REACT_APP_API_HOST}/songs`)
      .then((response) => response.json())
      .then((songs) => {
        this.setState({
          allSongs: songs,
          ready: true
        })
      });
  }

  updateSearch = (changeEvent) => {
    const searchKeyword = changeEvent.target.value;
    this.setState({
      searchKeyword: searchKeyword
    });
  }

  render() {
    const { allSongs, ready, searchKeyword } = this.state;
    const filteredSongs = allSongs.filter(filterSearch(searchKeyword));

    return (
      <Container className="App">
        <header className="App-header">
          <h1 className="App-title">SingStore List Manager</h1>
        </header>
        <AvailableSongs>
          <SearchBar updateSearch={this.updateSearch} />
          <SongList songs={filteredSongs} ready={ready} />
        </AvailableSongs>
      </Container>
    );
  }
}

export default App;


const Container = styled.main`
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

const AvailableSongs = styled.article`
  max-width: 500px;
  margin: 0 25px;
  height: 85%;
`

const filterSearch = (searchKeyword) =>
  (song) => {
    if (searchKeyword === "") return true;
    return compareStrings(song.title, searchKeyword)
    || compareStrings(song.artist, searchKeyword)
  }

  const compareStrings = (string1, string2) =>
    string1.toLowerCase().includes(string2.toLowerCase())
