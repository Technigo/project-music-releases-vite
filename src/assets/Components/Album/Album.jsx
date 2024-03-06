import { AlbumName } from "./AlbumName/AlbumName.jsx";
import { ArtistName } from "./ArtistName/ArtistName.jsx";
import { CoverImage } from "./CoverImage/CoverImage.jsx";
import "./Album.css";

export const Album = ({albums}) => {
  return(
    <section className="album-section">
      {albums.map((album) => (
        <div className="album-cards" key={album.id}>
          <CoverImage coverImage={album.images?.[0]?.url}/>
          <div className="album-info">
            <AlbumName 
              albumName={album.name} 
              albumURL={album.external_urls.spotify}/>
            <ArtistName 
              artistName={album.artists.map((artist) => artist.name)}    
              artistURL={album.artists.map((artist) => artist.external_urls.spotify)}/>  
          </div>
        </div>
     ))}
    </section>
  )
}
