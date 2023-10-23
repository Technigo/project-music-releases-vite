import { AlbumName } from "./AlbumName";
import { ArtistName } from "./ArtistName";
import { CoverImage } from "./CoverImage";

export const Album = ({ album }) => {
  return (
    <div className="wrapper">
      <div className="Album">
        <CoverImage image={album.images[0].url} />
        <AlbumName
          name={album.name}
          external_urls={album.external_urls.spotify}
        />
        <ArtistName
          artists={album.artists}
          external_urls={album.external_urls.spotify}
        />
      </div>
    </div>
  );
};
