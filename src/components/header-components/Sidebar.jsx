import { useState } from "react";

export const Sidebar = () => {
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

  return (
    <div className="sidebar">
      <button className="sidebar-btn" onClick={openNav}>
        <i className="fa-solid fa-music fa-xl"></i>
      </button>
      <nav style={style} className="sidebar-menu">
        <button className="close-btn" onClick={closeNav}>
          <i className="fa-solid fa-xmark fa-xl"></i>
        </button>
        <ul className="playlist">
          <li className="platlist-item">Playlist 1</li>
          <li className="platlist-item">Playlist 2</li>
          <li className="platlist-item">Playlist 3</li>
        </ul>
      </nav>
    </div>
  );
};
