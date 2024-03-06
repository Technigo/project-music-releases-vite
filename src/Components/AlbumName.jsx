import PropTypes from "prop-types"

export const AlbumName = ({albumName}) => {
    return (
        <h2>{albumName}</h2>
    )
}

AlbumName.propTypes ={
    albumName: PropTypes.string.isRequired
}

export default AlbumName;