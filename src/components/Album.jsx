import { AlbumName } from "./AlbumContent/AlbumName"
import { ArtistName } from "./AlbumContent/ArtistName"
import { AlbumCover } from "./AlbumContent/CoverImage"

export const Album = ({ albums }) => {
  console.log(albums)
    
      
      return(
      <section className="album-wrapper">
        {albums.map((album) => (
        <div className="album" key={album.id}>
          <AlbumCover coverImage = {album.images[1].url}/>
          <div className="album-info">
          {/* Directly access the album name */}
          <AlbumName albumName={album.name} albumURL={album.external_urls.spotify}/>
          {/* Pass an array of artist names to ArtistName component */}
          <ArtistName artistName = {album.artists.map((artist)=> artist.name)} 
                      artistURL={album.artists.map((artist)=> artist.external_urls.spotify)}/>
          </div>
        </div>
      ))}
      </section>
      )

  
  };

