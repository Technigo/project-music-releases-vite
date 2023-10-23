import { AlbumName } from "./AlbumName";
import { CoverImage } from "./CoverImage";
import { ArtistName } from "./ArtistName";
import "./Album.css";

export const Album = ({ albumName, imgSrc, albumUrl, artists }) => {
  return (
    <div className="albumContainer">
      <div className="album">
        <CoverImage imgSrc={imgSrc} alt={albumName} albumUrl={albumUrl} />
        <AlbumName albumUrl={albumUrl} albumName={albumName} />
        <ArtistName artists={artists} />
      </div>
    </div>
  );
};
