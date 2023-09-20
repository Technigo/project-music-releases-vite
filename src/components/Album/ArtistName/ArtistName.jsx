// ArtistName component which is rendered using .map() using each item in the artists array. The Album component to show the artist name and a link.

import PropTypes from 'prop-types'

const ArtistNames = ({artistsArray}) => {
  return (
    <div className="artist-names">
        {artistsArray.map((mappedOutArtist) => (
            <span className="artist-name" key={mappedOutArtist.id}>{mappedOutArtist.name}
            </span>
        ))}
    </div>
  )
}

ArtistNames.propTypes = {
    artistsArray: PropTypes.array.isRequired
}

export default ArtistNames