import { AlbumName } from "./AlbumName.jsx";
import { ArtistName } from "./ArtistName.jsx";
import { CoverImage } from "./CoverImage.jsx";

export const Album = (props) => {
  return (
    <div className="album">
      <CoverImage coverImages={props.coverImages} />
      <AlbumName albumName={props.albumName} href={props.href} />
      <ArtistName artists={props.artists} />
    </div>
  );
};
