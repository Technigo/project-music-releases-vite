import PropTypes from 'prop-types'

const AlbumName = ({albumName}) => {
  return (
    <div>{albumName}</div>
  )
}

AlbumName.propTypes = {
    albumName: PropTypes.string.isRequired
}

export default AlbumName