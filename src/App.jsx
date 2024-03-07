import { Header } from "./components/Header.jsx";
import {
  AllAlbums,
  SortAlbums,
  SortSingles,
} from "./components/RenderAlbum.jsx";
import { useState } from "react";
import "./components/header.css";

export const App = () => {
  const [isSorted, setSorted] = useState(false);

  const sortOnClick = () => {
    setSorted(!isSorted);
  };

  return (
    <>
      <Header sortOnClick={sortOnClick} />
      <div
        className={isSorted ? "hide album-collection" : "show album-collection"}
      >
        {AllAlbums()}
      </div>
      <div
        className={isSorted ? "show album-collection" : "hide album-collection"}
      >
        <div className="album album-type">
          <h2>Albums</h2>
        </div>
        {SortAlbums()}
      </div>
      <div
        className={isSorted ? "show album-collection" : "hide album-collection"}
      >
        <div className="album album-type">
          <h2>Singles</h2>
        </div>
        {SortSingles()}
      </div>
    </>
  );
};
