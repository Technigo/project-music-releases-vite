import data from "./data.json";
import { Header } from "./components/Header";
import { Album } from "./components/Album";
import { Footer } from "./components/Footer";
import './App.css'

//This is where we get the data from json
export const App = () => {
  const albums = data.albums.items;

//Map over albums and retrieve id, name (of album), image and artists
  const renderAlbums = () =>
      albums.map(({ id, name, images, artists, external_urls}) => (
        <Album
        key={id}
        albumName={name}
        albumUrl={external_urls.spotify}
        coverImg={images[0].url}
        artists={artists}
        />
      ));

    //Display header and music content on the page
      const renderAlbumContent = renderAlbums()
      return (
        <div className="app">
          <Header/>
          <div className="main-section">{renderAlbumContent}</div>
          <Footer/>
        </div>
      )

  }

  export default App