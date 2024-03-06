import data from "./data.json";
import { Header } from "./Components/Header";
import { Album } from "./Components/Album";

//This is where we get the data from json
export const App = () => {
  const albums = data.albums.items;

//Map over albums and retrieve id, name (of album), image and artists
  const renderAlbums = () =>
      albums.map(({ id, name, images, artists }) => (
        <Album
        key={id}
        albumName={name}
        imgSrc={images[0].url}
        artists={artists}
        />
      ));

    //Display header and music content on the page...I think
      const renderAlbumContent = renderAlbums()
      return (
        <div className="app">
          <Header/>
          <div className="main-section">{renderAlbumContent}</div>
        </div>
      )

  }

