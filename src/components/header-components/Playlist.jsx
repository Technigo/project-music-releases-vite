import PropTypes from "prop-types"

export const Playlist = ({name, external_urls}) => {

  return (
      <li><a href={external_urls.spotify}>{name}</a></li>
  )
}

Playlist.propTypes = {
  name: PropTypes.string.isRequired,
  external_urls: PropTypes.object.isRequired,
}
