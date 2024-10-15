import PropTypes from "prop-types";
import { ArtistName } from "../ArtistName/ArtistName.jsx";
import playIcon from "../../assets/icons/play.svg";
import dotsIcon from "../../assets/icons/dots.svg";
import "./Album.css";

export const Album = ({ album }) => {
  // Album component receives an "album" prop, which contains data (name, img and artists) for a SINGLE album.
  return (
    <div className="album">
      <div className="album-cover-container">
        {/* Container for the album cover image and icons overlay */}

        {/* Album cover image */}
        <img
          src={album.images[0].url}
          alt={album.name}
          className="album-cover"
        />

        {/* Icons overlay */}
        <div className="icons">
          {/* Hidden checkbox to toggle heart color */}
          <input
            type="checkbox"
            id={`heart-${album.id}`}
            className="heart-checkbox"
          />

          {/* Label for heart icon, referencing checkbox */}
          <label
            htmlFor={`heart-${album.id}`}
            className="icon heart-icon"
          ></label>

          {/* Play Icon */}
          <a
            href={album.external_urls.spotify}
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src={playIcon}
              alt="Play on Spotify"
              className="icon play-icon"
            />
          </a>

          {/* More options icon */}
          <img src={dotsIcon} alt="More options" className="icon" />
        </div>
      </div>

      {/* Album name */}
      <h3 className="album-name">
        <a
          href={album.external_urls.spotify}
          target="_blank"
          rel="noopener noreferrer"
        >
          {album.name}
        </a>
      </h3>

      {/* Artist names */}
      <p className="artist-names">
        {/* it maps through the list of artists for the album, and for each artist, it creates an ArtistName component  */}
        {album.artists.map((artist, index) => (
          <ArtistName
            key={artist.id}
            artist={artist}
            showComma={index < album.artists.length - 1}
          />
        ))}
      </p>
    </div>
  );
};

{
  /* defines the structure of the album prop to ensure everything the Album component needs is provided. */
}
Album.propTypes = {
  album: PropTypes.shape({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    external_urls: PropTypes.shape({
      spotify: PropTypes.string.isRequired,
    }).isRequired,
    images: PropTypes.arrayOf(
      PropTypes.shape({
        url: PropTypes.string.isRequired,
      })
    ).isRequired,
    artists: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired,
      })
    ).isRequired,
  }).isRequired,
};
