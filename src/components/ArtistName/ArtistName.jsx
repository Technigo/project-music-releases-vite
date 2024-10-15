import { PropTypes } from "prop-types";
import "./ArtistName.css"; // Import the CSS file

export const ArtistName = ({ artist, showComma }) => {
  return (
    <span>
      {/* 
      Display the artist’s name as a clickable link. 
      When clicked, it opens the artist's Spotify page in a new browser tab. 
      */}
      <a
        href={artist.external_urls.spotify}
        target="_blank"
        rel="noopener noreferrer"
      >
        {/* 
      Shows the artist’s name on the screen
      */}
        {artist.name}
      </a>
      {showComma && <span className="ampersand"> & </span>}
    </span>
  );
};

ArtistName.propTypes = {
  artist: PropTypes.shape({
    name: PropTypes.string.isRequired,
    external_urls: PropTypes.shape({
      spotify: PropTypes.string.isRequired,
    }).isRequired,
  }).isRequired,
  showComma: PropTypes.bool,
};
