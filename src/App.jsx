import { Album } from "./components/Album"
import data from "./data.json"
import Header from "./components/Header"

const selectAlbums = data.albums.items

export const App = () => {
  return (
    <div>
      <Header />
      <div className="albums">
        {selectAlbums.map(album => (
          <Album
            key={album.id}
            artistName={album.artists[0].name}
            artistUrl={album.artists[0].external_urls.spotify}
            coverImage={album.images[0].url}
            albumName={album.name}
            albumUrl={album.external_urls.spotify}
          />
        ))}
      </div>
    </div>
  );
};