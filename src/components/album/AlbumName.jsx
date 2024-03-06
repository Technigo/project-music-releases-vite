import PropTypes from "prop-types";


export const AlbumName = ({albumName,albumURL}) => {
    return (
        <div>
            <a href={albumURL}>
                <h3>{albumName}</h3>
            </a>
        </div>
    );
}

AlbumName.propTypes = {
    albumName: PropTypes.string.isRequired,
    albumURL: PropTypes.string.isRequired
};

export default AlbumName