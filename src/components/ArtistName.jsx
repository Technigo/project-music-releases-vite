import PropTypes from 'prop-types';

export const ArtistName = ({ artists }) => {
    const artistElements = artists.map((artist, index) => (
        <span key={artist.id}>
            <a href={artist.external_urls.spotify} target="_blank" rel="noopener noreferrer">
                {artist.name}
            </a>
            {index < artists.length - 1 && <span>, </span>}
        </span>
    ));

    return <div className="artists">{artistElements}</div>
    
};

ArtistName.propTypes = {
    artists: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.string.isRequired,
            name: PropTypes.string.isRequired,
            external_urls: PropTypes.shape({
                spotify: PropTypes.string.isRequired
            }).isRequired
        })
    ).isRequired
};