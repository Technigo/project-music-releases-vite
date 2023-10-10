import PropTypes from 'prop-types';

export const AlbumName = ({ albumName, externalUrl}) => {
    return (
        <div className="albumname">
            <a href={externalUrl} target="_blank" rel="noopener noreferrer">
                <h3>{albumName}</h3>
            </a>

        </div>
    );
};

AlbumName.propTypes = {
    albumName: PropTypes.string.isRequired,
    externalUrl: PropTypes.string.isRequired,
};