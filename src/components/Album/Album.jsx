import { AlbumCover } from "../AlbumCover/AlbumCover";
import { Artists } from "../Artists/Artists";

export const Album = ({ albumName, albumCover, artists }) => {
  return (
    <div>
      <AlbumCover image={albumCover} />
      <div className="albumName">{albumName}</div>
      <Artists artists={artists} />
    </div>
  );
};
