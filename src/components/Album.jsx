//importing album's children
import { CoverImage } from "./CoverImage/CoverImage"
import { AlbumName } from "./AlbumName/AlbumName"
import { ArtistName } from "./ArtistName/ArtistName"

export const Album = ({ data }) => {

  //with this we extract the list of albums from the data
let albums = data.albums.items
  
  return( 
  <section className="album-wrapper">
    {albums.map((singleItem) => {
    
    //in this part we render albums children coverimage, albumname and artistname with the album data
    return (
      <div className="album" key={singleItem.id}>
        <CoverImage singleCoverItem={singleItem} />
        <AlbumName singleAlbumItem={singleItem} />
        <ArtistName singleArtistItem={singleItem} />
      </div>
        ); 
      })}
  </section>
  );
};
