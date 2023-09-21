import PropTypes from 'prop-types'

const ArtistNames = ({artistsArray}) => {
  return (
    <div className="artist-wrapper"> 
        {artistsArray.map((mappedOutArtist) => (
            <h3 className="artist-name" key={mappedOutArtist.id}>
                {mappedOutArtist.name}
            </h3>
        ))}
    </div>
  ) 
}

ArtistNames.propTypes = {
    artistsArray:PropTypes.array.isRequired
}

export default ArtistNames