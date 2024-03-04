import { AlbumName } from "./AlbumName.jsx";
import { ArtistName } from "./ArtistName.jsx";
import { CoverImage } from "./CoverImage.jsx";

export const Album = ({ albumImageUrl, name, releaseDate, artists }) => {
  return (
    <div>
      <CoverImage imageUrl={albumImageUrl} />
      <AlbumName name={name} />
      <ArtistName artists={artists} />
    </div>
  );
};
