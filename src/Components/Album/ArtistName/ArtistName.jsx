import PropTypes from 'prop-types'

const ArtistNames = ({artistsArray}) => {
  return (
    <div className="artist-wrapper"> 
        {artistsArray.map((mappedOutArtist) => (
            <span className="artist-name" key={mappedOutArtist.id}>
                {mappedOutArtist.name}
            </span>
        ))}
    </div>
  ) 
}

ArtistNames.propTypes = {
    artistsArray:PropTypes.array.isRequired
}

export default ArtistNames