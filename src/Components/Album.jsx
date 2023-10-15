import { AlbumName } from "./AlbumName/AlbumName"
import { ArtistName } from "./ArtistName/ArtistName"
import { CoverImage } from "./CoverImage/CoverImage"

export const Album = ({ data }) => {

let albums = data.albums.items

  return( 
  <section className="album-wrapper">
    {albums.map((singleItem) => {

    return (
      <div className="album" key={singleItem.id}>
        <CoverImage singleCoverItem={singleItem} />
        <AlbumName singleAlbumItem={singleItem} />
        <ArtistName singleArtistItem={singleItem} />
      </div>
        ) 
      })
    }
  </section>

  )
}