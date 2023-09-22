/* eslint-disable react/prop-types */
import { AlbumName } from "./AlbumName";
import { ArtistName } from "./ArtistName";
import { CoverImage } from "./CoverImage";
import "./album.css"; 
export const Album = (props) => {
  
  let albumName = props.album.name
  let artistName = props.album.artists[0].name
  let coverImage = props.album.images[0].url


  return (
    <> 
      <div className="eachAlbum">
      <CoverImage images={coverImage} />
      <AlbumName name={albumName} />
      <ArtistName name={artistName} />
      </div>
    </>
  );
};


