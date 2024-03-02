import { ArtistName } from "./ArtistName.jsx";
import { AlbumName } from "./AlbumName.jsx";
import { CoverImage } from "./CoverImage.jsx";
import PropTypes from "prop-types";

export const Album = ({ src, albumTitle, albumUrl, artists }) => {
  return (
    <div>
      <CoverImage src={src} />
      <AlbumName
        albumTitle={albumTitle}
        albumUrl={albumUrl}
      />
      {artists.map((artist, i) => {
        return (
          <ArtistName
            key={i}
            artistName={artist.name}
            artistUrl={artist.external_urls.spotify}
          />
        );
      })}
    </div>
  );
};

Album.propTypes = {
  src: PropTypes.string,
  albumTitle: PropTypes.string,
  albumUrl: PropTypes.string,
  artists: PropTypes.array
}