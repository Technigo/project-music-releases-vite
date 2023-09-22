import PropTypes from 'prop-types';

export const ArtistName = ({ artistName, externalUrl }) => {
    return (
        <div className="artist-name">
            <a href={externalUrl} target="_blank" rel="noopener noreferrer">
                <h3>{artistName}</h3>
            </a>
        </div>
    );
};

ArtistName.propTypes = {
    artistName: PropTypes.string.isRequired,
    externalUrl: PropTypes.string.isRequired,
};