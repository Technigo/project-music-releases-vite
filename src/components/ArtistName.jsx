import { PropTypes } from "prop-types";
import "./ArtistName.css";

export const ArtistName = ({ artists }) => {
  return (
    <div>
      {artists.map((artist) => (
        <span key={artist.id} className="artist-name-link">
          <a href={artist.external_urls.spotify}>{artist.name} </a>
        </span>
      ))}
    </div>
  );
};

ArtistName.propTypes = {
  artists: PropTypes.array.isRequired,
};
