import data from "../data.json";
import playlistData from "../stretched-goal.json";
import "./app.css";
import { AlbumCard } from "./AlbumCards/Album/AlbumCard.jsx";
import { Header } from "./Hero/Header.jsx";
import { RenderPlaylist } from "./PlaylistSidebar/RenderPlaylist.jsx"
import { RandomAlbum } from "./AlbumCards/RandomAlbum.jsx";
import { EditorPicks } from "./PlaylistSidebar/Playlists/EditorPicks";

export const App = () => {
  const albumData = data.albums.items;

  // Separates albums and singles
  const albums = albumData.filter((item) => item.album_type === "album");
  console.log(albums);
  const singles = albumData.filter((item) => item.album_type === "single");
  console.log(singles);

  // The contents that are actually rendered via Main.jsx onto the Virtual Dom. The map-method is used here to go through each object in the array. The component Albums takes in the data and adds in the correct value into the propNames image, name and artist. Header is appended first, since I don't want this to render more than once.
  return (
    <div className="body-container">
        <header className="header">
            <Header />
        </header>
        <h2 className="albums-heading">New albums</h2>
        <div className="album-cards">
          {/* Generates albums */}
        {albums.map((album) => (
          <AlbumCard fullAlbum={album} key={album.id} />
        ))}
        </div>
        <h2 className="singles-heading">New singles</h2>
        <div className="singles-cards">
          {/* Generates singles */}
        {singles.map((single) => (
          <AlbumCard fullAlbum={single} key={single.id} />
        ))}
        </div>
        {/* Generates random album on each reload */}
        <section className="random-album">
            <h2 className="albums-heading">Random album tip</h2>
            <RandomAlbum allAlbums={albumData}/>
        </section>
        {/* Generates heading for playlist of editor picks */}
        <EditorPicks playlistName={playlistData.message} />
        {/* Generates editor's picks playlists */}
        <RenderPlaylist playlistData={playlistData.playlists.items}/>
    </div>
  );
};

