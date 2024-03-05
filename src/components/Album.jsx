import { AlbumName } from "./AlbumName.jsx";
import { ArtistName } from "./ArtistName.jsx";
import { CoverImage } from "./CoverImage.jsx";

export const Album = ({ albumImageUrl, name, artists, url }) => {
  return (
    <div className="album-container">
      <CoverImage imageUrl={albumImageUrl} url={url} />
      <AlbumName name={name} />
      <ArtistName artists={artists} />
    </div>
  );
};
