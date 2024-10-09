import "./Album.css";
import { AlbumName } from "./AlbumName";
import { ArtistName } from "./ArtistName";
import { CoverImage } from "./CoverImage"


export const Album = ({ albumName, imgSrc, albumUrl, artists }) => {
  
  return (
    <div className="album-container">
      <div className="album">
        <CoverImage imgSrc={imgSrc} alt={albumName} />
        <AlbumName albumUrl={albumUrl} albumName={albumName} />
        <ArtistName artists={artists} />
      </div>
    </div>
  );
};

//The Album element renders:
// a CoverImage component passing imgSrc & alt prop
// AlbumName is passing the albumUrl and albumName props 
//ArtistName is passing the artistName prop which is an array of artist objects. The artist list gets displayed using the ArtistName component logic



