
//Album component which is rendered using .map() and which you pass the album data into using props.

import PropTypes from 'prop-types'

const AlbumName = ({albumName}) => {
  return (
    <div>{albumName}</div>
  ) 
}

AlbumName.propTypes = {
    albumName:PropTypes.string.isRequired
}

export default AlbumName