import { AlbumName } from "../AlbumName/AlbumName";
import { AlbumCover } from "../AlbumCover/AlbumCover";
import { Artists } from "../Artists/Artists";
import "./album.css";

export const Album = ({ albumInfo, albumCover, artists }) => {
  return (
    <div className="album">
      {/* Takes the information received from App and sends it to the relevant component for display and formatting */}
      <AlbumCover image={albumCover} />
      <AlbumName albumInfo={albumInfo} />
      <Artists artists={artists} />
    </div>
  );
};
