import { Album } from "./components/album/Album";
import { Header } from "./components/Header";
import data from "./data.json";

import "./index.css";

console.log(data);

export const App = () => {
  const albums = data.albums.items;
  // const artists = data.albums.items.artists;
  console.log(albums);

  const renderAlbums = () => {

    return (
      <div>
        {albums.map((album) => (
          <Album
            key={album.id}
            name={album.name}
            artists={album.artists}
            imageUrl={album.images[0].url}
            albumHttpLink={album.external_urls.spotify}
          />
        ))}
      </div>
    )
  };

  return (
    <>
      <Header />
      <section className="albums-container">
        {renderAlbums()}
      </section>
    </>
  )

}