import data from "./data.json";
import playlistData from "./stretched-goal.json"
import { Album } from './components/Album';
import { Header } from './components/Header';
import { Sidebar } from "./components/Sidebar";
import { ExploreAlbum } from "./components/ExploreAlbum";

export const App = () => {
  const albumItems = data.albums.items; // Store the array in a variable

  // Separate singles from albums
  const singles = albumItems.filter((item) => item.album_type === "single");

  return (
    <div className="app-container">
      {/* Header */}
      <header className="header">
        <Header />
      </header>
      {/* Explore Album */}
      <h2 className="explore-heading">Explore</h2>
      <section className="explore-album">
        <ExploreAlbum allAlbums={albumItems} />
      </section>
      {/* Albums */}
      <h2 className="album-heading">New albums</h2>
      <div className="album-wrapper">
        {albumItems.map((album) => (
          <Album key={album.id} albumData={album} />
        ))}
      </div>
      {/* Singles */}
      <h2 className="singles-heading">New singles</h2>
      <div className="singles-cards">
        {singles.map((single) => (
          <Album key={single.id} albumData={single} />
        ))}
      </div>
      {/* Sidebar */}
      <h2 className="sidebar-heading">Playlists</h2>
      <Sidebar playlistData={playlistData.playlists.items} />
    </div>
  );
};
