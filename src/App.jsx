import data from "./data.json";
import moreData from "./stretched-goal.json";
import { Album } from "./components/Album";
import { Header } from "./components/Header";
import { Playlists } from "./components/playlists";
import { SinglesOnly } from "./components/SinglesOnly";

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

  return (
    
    <div className="App">
      <div><Header /></div>
      <div className="singles">
        <h2>Singles</h2>
          {renderSingles}
        </div>
        <section className="musicOuter">{renderContent}</section>
       <div className="playlists">{renderPlaylists}</div> 
    </div>
  );
};

