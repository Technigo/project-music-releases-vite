/* eslint-disable react/prop-types */
import { AlbumName } from "./AlbumContent/AlbumName"
import { ArtistName } from "./AlbumContent/ArtistName"
import { AlbumCover } from "./AlbumContent/CoverImage"

export const Album = ({ albums }) => {
      
      return(
      <section className="album-wrapper">
        {albums.map((album) => (
        <div className="album" key={album.id}>
          {/* Accessing the cover images: */}
          <AlbumCover coverImage = {album.images[1].url}/>
          <div className="album-info">
          {/* Accessing the album name: */}
          <AlbumName albumName={album.name} albumURL={album.external_urls.spotify}/>
          {/* Passing an array of artist names/URLS to ArtistName component */}
          <ArtistName artistName = {album.artists.map((artist)=> artist.name)} 
                      artistURL={album.artists.map((artist)=> artist.external_urls.spotify)}/>
          </div>
        </div>
      ))}
      </section>
      )

  
  };

