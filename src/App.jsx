import data from "./data.json";
import { Album } from "./components/Album";
import { Header } from "./components/child components/Header";

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

  return (
    <div className="App">
      <Header />
        <section className="musicOuter">{renderContent}</section>
    </div>
  );
};

