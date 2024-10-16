/* eslint-disable react/prop-types */
import "./Album.css"
import { CoverImage } from "./CoverImage.jsx"
import { AlbumName } from "./AlbumName.jsx"
import { ArtistName } from "./ArtistName.jsx"

export const Album = ({ name, albumUrl, artists, image }) => {
  return (
    <div className="album">
      <CoverImage image={image} />
      <AlbumName name={name} albumUrl={albumUrl} />
      <ArtistName artists={artists} />
    </div>
  );
}