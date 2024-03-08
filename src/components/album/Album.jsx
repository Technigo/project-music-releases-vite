import './Album.css'
import PropTypes from 'prop-types'
import { ArtistName } from './ArtistName'
import { AlbumName } from './AlbumName'
import { CoverImage } from './CoverImage'

export const Album=(
    {images, name, id, artists,external_urls
    }
)=>{
    return (
    <div  className='album' key={id}>
        <div className='albumContainer'>
            <CoverImage
            images={images}
            name={name}
            />
            <AlbumName
            name={name}
            key={id}
            external_urls={external_urls}
            />
            <ArtistName
            artists={artists}
             />
        </div>
    </div>
  )
}

Album.PropType={
    name:PropTypes.string.isRequired,
    release_date:PropTypes.string.isRequired,
    id:PropTypes.string.isRequired,
    artists:PropTypes.array.isRequired
    
}
