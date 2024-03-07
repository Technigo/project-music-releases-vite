import "./Album.css";
import { AlbumName } from "./AlbumName"
import { ArtistName } from "./ArtistName"
import { CoverImage } from "./CoverImage"

export const Album = ({ albumName, imgSrc, albumUrl, artistName }) => {
  return (
    <div className="album-container">
      <div className="album">
        <CoverImage imgSrc={imgSrc} alt={albumName} />
        <AlbumName albumUrl={albumUrl} albumName={albumName} />
        <ArtistName artistName={artistName} />
      </div>
    </div>
  );
};

