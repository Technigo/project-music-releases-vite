import { AlbumName } from "../AlbumName/AlbumName";
import { AlbumCover } from "../AlbumCover/AlbumCover";
import { Artists } from "../Artists/Artists";
import "./Album.css";

export const Album = ({ albumInfo, albumCover, artists }) => {
  return (
    <div className="album">
      <AlbumCover image={albumCover} />
      <AlbumName albumInfo={albumInfo} />
      <Artists artists={artists} />
    </div>
  );
};
