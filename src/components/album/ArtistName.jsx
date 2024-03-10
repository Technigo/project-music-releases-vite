import './ArtistName.css'
import PropTypes from 'prop-types'

export const ArtistName=({artistName, artistUrl}) => {
  return (
    <a href={artistUrl} target="_blank" className='artist'>{artistName}</a>
    )
}

ArtistName.PropType={
  artists:PropTypes.array.isRequired,
}
