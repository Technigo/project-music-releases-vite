import { AlbumName } from "./AlbumContent/AlbumName"
import { ArtistName } from "./AlbumContent/ArtistName"
import { AlbumCover } from "./AlbumContent/CoverImage"

export const Album = ({ albums }) => {
  console.log(albums)
    const renderAlbums = () => {
      return albums.map((album) => (
        <div className="album" key={album.id}>
          <AlbumCover coverImage = {album.images[1].url}/>
          {/* Directly access the album name */}
          <AlbumName albumName={album.name} />
          {/* Pass an array of artist names to ArtistName component */}
          <ArtistName artistName = {album.artists.map((artist)=> artist.name)}/>
          
        </div>
      ));
    };
  
    return (
      <div>
        {/* Render the list of albums */}
        {renderAlbums()}
      </div>
    );
  };

