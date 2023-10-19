import { CoverImage } from "./CoverImage";
import { ArtistName } from "./ArtistName";
import { AlbumName } from "./AlbumName";
import "./album.css";

// added some extra props for stretch goals
export const Album = ({
  name,
  album_type,
  artists,
  external_urls,
  images,
  release_date,
  total_tracks
}) => {
  return (
    <div className="album">
      <CoverImage name={name} image={images[0].url} spotify={external_urls.spotify}/>
      <AlbumName name={name} />
      <ArtistName artists={artists} />
    </div>
  );
};