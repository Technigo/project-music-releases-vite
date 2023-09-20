import Album from "./components/Album";
import data from "./data.json";
import playlistData from "./stretched-goal.json";
import React from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Playlist from "./components/Playlist";

// console.log(data);
// console.log(playlistData);
export const App = () => {
  // map albums data
  const albums = data.albums.items;
  const albumsData = () => {
    return albums.map((album) => {
      return (
        <Album
          key={album.id}
          image={album.images[1].url}
          link={album.external_urls.spotify}
          title={album.name}
          artists={album.artists}
        />
      );
    });
  };
  // map playlists data
  const playlists = playlistData.playlists.items;

  const playlistsData = () => {
    return playlists.map((playlist) => {
      return (
        <Playlist
          key={playlist.id}
          name={playlist.name}
          images={playlist.images[0].url}
          link={playlist.external_urls.spotify}
        />
      );
    });
  };
  return (
    <div>
      {/* header part */}
      <Header />

      {/* body part */}

      <section className="albumSection">{albumsData()}</section>
      <section className="playList">
        <h2>Playlists:</h2>
        {playlistsData()}
      </section>

      {/* footer part */}
      <Footer />
    </div>
  );
};

export default App;
