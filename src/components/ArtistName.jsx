import PropTypes from "prop-types";

// Artist Name
export const ArtistName = ({ artists }) => {
  return (
    <div className="artists-container">
      {artists.map((artist, index) => {
        let separator = ", ";
        if (artists.length === 2 && index === 0) {
          separator = " & ";
        } else if (index === artists.length - 2) {
          separator = " & ";
        } else if (index === artists.length - 1) {
          separator = "";
        }

        return (
          <span key={artist.id}>
            <a href={artist.external_urls.spotify} target="_blank" rel="noopener noreferrer" className="artist-name-a">
              <h3 className="artist-name">{artist.name + separator}</h3>
            </a>
          </span>
        )
      })}
    </div>
  )
}

ArtistName.propTypes = {
  artists: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
    })
  ).isRequired,
  artistsUrl: PropTypes.string.isRequired
}