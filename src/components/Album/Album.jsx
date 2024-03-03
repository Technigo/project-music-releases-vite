import "./Album.css";
import { AlbumName } from "./AlbumName";
import { ArtistName } from "./ArtistName";
import { CoverImage } from "./CoverImage";

export const Album = ({ id, name, artists, external_urls, images }) => {
  return (
    <div className="album__list" key={id}>
      <CoverImage images={images} name={name} />
      <AlbumName name={name} external_urls={external_urls} />
      <ArtistName artists={artists} />
    </div>
  );
};
