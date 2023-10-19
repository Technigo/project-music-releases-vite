import "./index.css";
import { useState } from "react";
import { Header } from "./components/Header";
import { Album } from "./components/Album/Album";
import { Sidebar } from "./components/Sidebar/Sidebar";
import albumData from "./data.json";
import playlistData from "./playlists.json";

export const App = () => {
  // set a state on the sidebar to check if the sidebar is open or closed
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  // Function to toggle the sidebar
  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const albums = albumData.albums.items;
  const playlists = playlistData.playlists.items;

  const onlyAlbums = albums.filter((album) => album.album_type === "album");
  const onlySingles = albums.filter((album) => album.album_type === "single");

  const renderAlbumComponent = (albumOrSingleArray) =>
    albumOrSingleArray.map(({ id, name, artists, external_urls, images }) => {
      return (
        <Album
          key={id}
          name={name}
          artists={artists}
          external_urls={external_urls.spotify}
          images={images[0]}
        />
      );
    });

  const renderedAlbums = renderAlbumComponent(onlyAlbums);
  const renderedSingles = renderAlbumComponent(onlySingles);

  return (
    <>
      {/* Send toggleSidebar function and isSidebarOpen */}
      <Header toggleSidebar={toggleSidebar} isSidebarOpen={isSidebarOpen} />
      {/* Show sidebar if isSidebarOpen is true and add playlist data as a prompt */}
      {isSidebarOpen && <Sidebar playlists={playlists} />}
      <section className="main__albums_singles">
        <section className="main__albums_singles_column">
          <h2>Albums</h2>
          <div className="main__albums_singles_container">{renderedAlbums}</div>
        </section>
        <section className="main__albums_singles_column">
          <h2>Singles</h2>
          <div className="main__albums_singles_container">
            {renderedSingles}
          </div>
        </section>
      </section>
      <section className="albumOuter"></section>
    </>
  );
};
