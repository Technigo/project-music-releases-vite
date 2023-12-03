import data from "./data.json";
import playlistData from "./stretched-goal.json"
import { Album } from './components/Album';
import { Header } from './components/Header';
import { Sidebar } from "./components/Sidebar";
import { ExploreAlbum } from "./components/ExploreAlbum";

export const App = () => {
  const albumItems = data.albums.items; // Store the array in a variable

  // Separates albums and singles
  const albums = albumItems.filter((item) => item.album_type === "album");
  console.log(albums);
  const singles = albumItems.filter((item) => item.album_type === "single");
  console.log(singles);

  return (
    <div className="app">
      <header className="header">
        <Header />
      </header>
      <h2 className="album-heading">New albums</h2>
      <div className="album-wrapper">
        {albumItems.map((album) => (//map over album data in json
          <Album
            key={album.id}
            albumData={album} // Pass the entire album object as a prop
          />
        ))}
      </div>
      <h2 className="singles-heading">New singles</h2>
      <div className="singles-cards">
        {/* Generates singles */}
        {singles.map((single) => (//map to find singles in album json data
          <Album albumData={single} key={single.id} />
        ))}
      </div>
      {/* Generates random album on each reload */}
      <section className="explore-album">
        <h2 className="explore-heading">Explore</h2>
        <ExploreAlbum allAlbums={albumItems} />
      </section>
      <h2 className="sidebar-heading">Editor's picks</h2>
      <Sidebar playlistData={playlistData.playlists.items} />
    </div>
  );
};
