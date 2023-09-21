
import { AlbumName } from './components/AlbumName/AlbumName';
import { ArtistName } from './components/ArtistName/ArtistName';
import { CoverImage } from './components/CoverImage/CoverImage';

export const Album = (props) => {
  
    let coverImage = props.items.images
    let albumName = props.items.name
    let artistName = props.items.artists[0].name
    
    
    return (

    <div className="album">
        <p>
           <CoverImage {coverImage} />
        </p>
        <p>
           {artists}
        </p>
    </div>
  )
}



