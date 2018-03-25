import React, { Component } from 'react';
import './App.css';
import SongList from './components/song-list/index';

class App extends Component {
  state = {
    allSongs: [],
    addedSongs: []
  }

  componentWillMount() {
    this.fetchAllSongs();
  }

  fetchAllSongs = () => {
    fetch(`${process.env.REACT_APP_API_HOST}/songs`)
      .then((response) => response.json())
      .then((songs) => {
        this.setState({
          allSongs: songs
        })
      });
  }

  render() {
    const { allSongs } = this.state;

    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">SingStore List Manager</h1>
        </header>
        <SongList songs={allSongs} />
      </div>
    );
  }
}

export default App;
