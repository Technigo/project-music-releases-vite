import React from "react";
import PropTypes from "prop-types";

export const Album = ({ album }) => {
  const { name, artists, images } = album;
  const artistNames = artists.map(artist => artist.name).join(", ");
  const coverImageUrl = images[0].url;

  return (
    <div className="album">
      <p>
        <span>Album: {name}</span>
      </p>
      <p>
        <span>Artist: {artistNames}</span>
      </p>
      <img src={coverImageUrl} alt={name} />
    </div>
  );
};

Album.propTypes = {
  album: PropTypes.shape({
    name: PropTypes.string.isRequired,
    artists: PropTypes.arrayOf(
      PropTypes.shape({
        name: PropTypes.string.isRequired
      })
    ).isRequired,
    images: PropTypes.arrayOf(
      PropTypes.shape({
        url: PropTypes.string.isRequired
      })
    ).isRequired
  }).isRequired
};

/*import PropTypes from "prop-types"
import { ArtistName } from "./album/ArtistName"

export const Album = ({ album }) => {
  const { name, artist } = album; // Extrahera namn och artist från albumobjektet
  return (
    <div className="album">
      <p>
        <span>Album: {name}</span>
      </p>
      <p>
        <span>Artist: <ArtistName artist={artist} /></span>
      </p>
    </div>
  );
}

Album.propTypes = {
  album: PropTypes.shape({
    name: PropTypes.string.isRequired,
    artist: PropTypes.string.isRequired
  }).isRequired
} */
/*import {AlbumName} from "./album/AlbumName"
import {ArtistName} from "./album/ArtistName"
import data from "../data.json";
import {CoverImage} from "./album/CoverImage"


export const Album = () => {
  const { albums } = data
  return(
    <section className="album-section">
     { albums.map((album) => (
        <div className="album" key={album.id}>
          <CoverImage url={album.images?.[0]?.url ??
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
}*/

