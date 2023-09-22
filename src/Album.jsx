import React, { Component } from 'react';
import Header from './Header';
import AlbumCard from './AlbumCard';
import data from './data.json';
import './index.css';

class Album extends Component {
  constructor(props) {
    super(props);
    this.state = {
      albums: [],
    };
  }

  componentDidMount() {
    this.setState({ albums: data.albums.items });
  }

  render() {
    const { albums } = this.state;

    return (
      <div>
        <Header />
        <div className="album-grid">
          {albums.map((album) => (
            <AlbumCard key={album.id} album={album} />
          ))}
        </div>
      </div>
    );
  }
}

export default Album;