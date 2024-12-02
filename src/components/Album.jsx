/* eslint-disable react/prop-types */
import { AlbumName } from "./AlbumName";
import { ArtistName } from "./ArtistName";
import { CoverImage } from "./CoverImage";
import "./Album.css"; 
export const Album = (props) => {
  
  let albumName = props.album.name
  let artistName = props.album.artists[0].name
  let coverImage = props.album.images[0].url
  let MusicUrl = props.album.external_urls.spotify



  return (
    <> 
      <div className="eachAlbum">
        <CoverImage images={coverImage} />
        <div className="music-link">
      <AlbumName name={albumName} musicUrl={MusicUrl} />
          <ArtistName name={artistName} musicUrl={MusicUrl} />
          </div>
      </div>
    </>
  );
};



