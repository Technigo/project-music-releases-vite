import { useState } from "react";
import { Playlist } from "./Playlist.jsx";
import playlistData from "../../stretch-goal.json";

export const Sidebar = () => {
  const { playlists } = playlistData;
  const renderPlaylist = playlists.items.map(({ name, external_urls, id }) => (
    <Playlist key={id} name={name} external_urls={external_urls} />
  ));

  const [style, setStyle] = useState({
    width: "0",
  });

  const openNav = () => {
    setStyle({
      width: "max-content",
    });
  };

  const closeNav = () => {
    setStyle({
      width: "0",
    });
  };

  const [isActive, setActive] = useState("false");
  // Makes a one-time toggle. To turn of animations when the user has noticed button.
  const ToggleClass = () => {
    if (isActive === "false") {
      setActive(!isActive);
    }
  };

  return (
    <div className="sidebar">
      <button
        className={isActive ? "sidebar-btn animate-sidebar" : "sidebar-btn"}
        onClick={() => {
          openNav()
          ToggleClass()
        }}
      >
        <i className="fa-solid fa-music fa-xl"></i>
      </button>
      <nav style={style} className="sidebar-menu">
        <button className="close-btn" onClick={closeNav}>
          <i className="fa-solid fa-xmark fa-xl"></i>
        </button>
        <ul className="playlist">{renderPlaylist}</ul>
      </nav>
    </div>
  );
};
