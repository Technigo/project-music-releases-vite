// Import components to album card
import { AlbumCover } from "./AlbumCover";
import { AlbumName } from "./AlbumName";
import { ArtistName } from "./ArtistName";

export const AlbumCard = (props) => {
  return (
    <article className="album-card">
      {/* Add elements (picture, album name, artist) to the album card and adding props data */}
      <AlbumCover albumcard={props.albumcard} />

      <AlbumName albumcard={props.albumcard} />

      <ArtistName albumcard={props.albumcard} />
    </article>
  );
};