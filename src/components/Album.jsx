import {AlbumName} from "./album/AlbumName"
import {ArtistName} from "./album/ArtistName"
import {CoverImage} from "./album/CoverImage"

export const Album = ({albums}) => {
  return(
    <section className="album-section">
      {albums.map((album) => (
        <div className="album" key={album.id}>
          <CoverImage coverImage={album.images?.[0]?.url ??
  "defultImageUrl"}/>
          
          <div className="album-info">
            <AlbumName albumName={album.name} albumURL=
 {album.external_urls.spotify}/>
            <ArtistName artistName=
 {album.artists.map((artist) => artist.name)}    
            artistURL={album.artists.map((artist) => 
 artist.external_urls.spotify)}/>  
          </div>
        </div>
     ))}
    </section>
  )
}