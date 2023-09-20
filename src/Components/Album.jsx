/* eslint-disable react/prop-types */
import { AlbumName } from "./AlbumName"
import { ArtistName } from "./ArtistName"
import { CoverImage } from "./CoverImage"


export const Album = ({name , artists , images}) => {
  return (
    <div className="album">
        <CoverImage images={images}/>
        <AlbumName name={name}/>
        <ArtistName artists={artists}/>

    </div>
   
  )
}
