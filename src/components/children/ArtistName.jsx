import PropTypes from 'prop-types';

export const ArtistName = ( { artistName }) => {
    const allArtists = artistName.length;
  
    return (
      <div className="artist-container">
        {artistName.map((artist, index) => (
          <span key={artist.id} className="artist-name">
            {allArtists > 1 && allArtists < 3 && index !== 0 && " & "}
            {allArtists > 2 && index !== 0 && ", "}
            <a
              className="artist-link"
              href={artist.external_urls.spotify}
              target="_blank"
              rel="noopener noreferrer"
            >
              {artist.name}
            </a>
          </span>
        ))}
      </div>
    );
  };



ArtistName.propTypes = {
    artistName: PropTypes.array.isRequired,
};