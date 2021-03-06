import React, { Component } from 'react';
import './App.css';
import SongList from './components/song-list/index';
import SearchBar from './components/searchbar/index';
import {
  Container,
  Header,
  AvailableSongs,
  AddedSongs,
  AddedTitle
} from './App.style';

class App extends Component {
  state = {
    allSongs: [],
    addedSongs: [],
    ready: false,
    searchKeyword: ""
  }

  componentWillMount() {
    this.fetchAllSongs();
    this.fetchAddedSongs();
  }

  componentDidMount() {
    this.intervalId = window.setInterval(
      this.fetchAddedSongs,
      30000
    );
  }

  componentWillUnmount() {
    window.clearInterval(this.intervalId);
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

  fetchAddedSongs = () => {
    fetch(`${process.env.REACT_APP_API_HOST}/songs/list`)
      .then((response) => response.json())
      .then((songs) => {
        this.setState({
          addedSongs: songs
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
    const { allSongs, addedSongs, ready, searchKeyword } = this.state;
    const filteredSongs = allSongs
      .filter(filterSearch(searchKeyword))
      .slice(0, 150);

    return (
      <Container className="App">
        <Header className="App-header">
          <h1 className="App-title">SingStore List Manager</h1>
        </Header>
        <AvailableSongs>
          <SearchBar updateSearch={this.updateSearch} />
          <SongList
            songs={filteredSongs}
            addedSongs={addedSongs}
            fetchAddedSongs={this.fetchAddedSongs}
            ready={ready}
          />
        </AvailableSongs>
        <AddedSongs>
          <AddedTitle>Added songs</AddedTitle>
          <SongList
            songs={addedSongs}
            addedSongs={addedSongs}
            fetchAddedSongs={this.fetchAddedSongs}
            ready={ready}
          />
        </AddedSongs>
      </Container>
    );
  }
}

export default App;


const filterSearch = (searchKeyword) =>
  (song) => {
    if (searchKeyword === "") return true;
    return compareStrings(song.title, searchKeyword)
    || compareStrings(song.artist, searchKeyword)
  }

  const compareStrings = (target, comparator) =>
    target.toLowerCase().includes(comparator.toLowerCase())
