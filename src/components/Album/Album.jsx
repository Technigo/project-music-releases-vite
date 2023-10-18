import { CoverImage } from "./CoverImage";
import { ArtistName } from "./ArtistName";
import { AlbumName } from "./AlbumName";

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
    <div>
      <CoverImage images={images} external_urls={external_urls.spotify}/>
      <AlbumName name={name} />
      <ArtistName artists={artists} />
    </div>
  );
};