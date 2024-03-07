import './ArtistName.css'
import PropTypes from 'prop-types'

export const ArtistName=({artists}) => {
    const names = artists.map(a => a.name).join(',');
    return (
        <p className='artist'>
            Artists: {names}
        </p>
     )
}

ArtistName.PropType={
    artists:PropTypes.array.isRequired,
}
