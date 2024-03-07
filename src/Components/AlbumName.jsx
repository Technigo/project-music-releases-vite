import PropTypes from "prop-types"

export const AlbumName = ({albumName, albumUrl}) => {
    return (
        <a href={albumUrl} target="_blank" rel="noopener noreferrer">
            <h2>{albumName}</h2>
            </a>
    )
}

AlbumName.propTypes ={
    albumName: PropTypes.string.isRequired,
    albumUrl: PropTypes.string.isRequired
}

export default AlbumName;