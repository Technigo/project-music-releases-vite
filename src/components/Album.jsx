/* eslint-disable react/prop-types */

import { CoverImage } from "./CoverImage/CoverImage"
import { AlbumName } from "./AlbumName/AlbumName"
import { ArtistName } from "./ArtistName/ArtistName"


export const Album = ({ data }) => {

let albums = data.albums.items
   console.log(albums);
  
  return( 
  <section className="album-wrapper">
    {albums.map((singleItem) => {
    console.log("log singleItem:", singleItem); 
    return (
      <div className="album" key={singleItem.id}>
      <CoverImage singleCoverItem={singleItem} />
       <AlbumName singleAlbumItem={singleItem} />
       <ArtistName singleArtistItem={singleItem} />
      </div>
    ) 
    })}

  </section>
  
   )
}
