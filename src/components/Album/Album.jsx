import { AlbumName } from "../AlbumName/AlbumName";
import { AlbumCover } from "../AlbumCover/AlbumCover";
import { Artists } from "../Artists/Artists";
import "./album.css";

export const Album = ({ albumName, albumCover, artists }) => {
  return (
    <div>
      <AlbumCover image={albumCover} />
      <AlbumName albumName={albumName} />
      <Artists artists={artists} />
    </div>
  );
};
