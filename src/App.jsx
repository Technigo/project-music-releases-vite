import data from "./data.json";
import moreData from "./stretched-goal.json";
import { Album } from "./components/Album";
import { Header } from "./components/Header";
<<<<<<< HEAD
import { Playlists } from "./components/Playlists";
import { SinglesOnly } from "./components/SinglesOnly";
import { AlbumsOnly } from "./components/AlbumsOnly";
import { NavBar } from "./components/NavBar";
=======
import { Playlists } from "./components/playlists";
import { SinglesOnly } from "./components/SinglesOnly";
import { AlbumsOnly } from "./components/AlbumsOnly";
>>>>>>> main

console.log(data);

export const App = () => {

  // const albums = data.albums;
  // const oneAlbum = albums.items[0];
  // oneAlbum.name 

  // const oneArtist = oneAlbum.artists[0];
  // oneArtist.name


  const renderMusicInfo = () => 
    data.albums.items.map(
      ({id, name, artists, images, external_urls}) => (
        <Album 
          key={id}
          name={name}
          artists={artists}
          images={images}
          albumUrl={external_urls.spotify}
        />
      )
    );


  const renderContent = renderMusicInfo();


  const renderPlaylistInfo = () => 
    moreData.playlists.items.map(
      ({id, description, external_urls, images}) => (
        <Playlists 
          key={id}
          description={description}
          images={images}
          playlistUrl={external_urls.spotify}
        />
      )
    );

  const renderPlaylists = renderPlaylistInfo();

  const renderSinglesInfo = () => 
    data.albums.items.map(
      ({id, name, album_type, artists, images, external_urls}) => (
        <SinglesOnly 
          key={id}
          name={name}
          artists={artists}
          images={images}
          albumUrl={external_urls.spotify}
          album_type={album_type}
        />
      )
    );
      const renderSingles = renderSinglesInfo();

    const renderAlbumsInfo = () => 
      data.albums.items.map(
        ({id, name, album_type, artists, images, external_urls}) => (
          <AlbumsOnly 
            key={id}
            name={name}
            artists={artists}
            images={images}
            albumUrl={external_urls.spotify}
            album_type={album_type}
          />
        )
      );
        const renderAlbums = renderAlbumsInfo();
  

  return (
    <div className="App">
      <div><Header /></div>
      <div><NavBar /></div>
      <div className="musicOuter">
        <div className="playlistOuter">
          <h2 id="playlists">Playlists</h2>
          {renderPlaylists}
        </div> 
        <div className="singles">
          <h2 id="singles">Singles</h2>
            {renderSingles}
        </div>
        <div className="albums">
          <h2 id="albums">Albums</h2>
            {renderAlbums}
        </div>
        
        
      </div>
    </div>
  );
};

