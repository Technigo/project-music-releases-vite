import './ArtistName.css'
import PropTypes from 'prop-types'

export const ArtistName=({artists}) => {
    const names = artists.map(a => a.name).join(',');
    const artistUrl  = artists.map(a => a.external_urls.spotify)

    return (
        <a href={artistUrl} className='artist'>Artists: {names}</a>
     )
}

ArtistName.PropType={
    artists:PropTypes.array.isRequired,
}
