// Imports the necessary components from the other files as well as the CSS file for this component to apply styles.
import { AlbumName } from "./AlbumName/AlbumName.jsx"
import { ArtistNames } from "./ArtistName/ArtistName.jsx"
import { CoverImage } from "./CoverImage/CoverImage.jsx"

import "./Album.css"

// This component takes a prop called 'albumsArray', which is expected to be an array of album objects. It uses destructuring to extract the 'albumsArray' prop from the props object. It then maps over the array and renders each album's information, creating a list of album cards. Render a section with the class "album-container" to contain the album cards. Each album card consists of a CoverImage, AlbumName, and ArtistNames component, which are passed the relevant information as props.
export const Album = ({ albumsArray }) => {
  return (
    <section className="album-container">
      {albumsArray.map((mappedOutItem) => (
        <div className="album-card" key={mappedOutItem.id}>
          <CoverImage coverImage={mappedOutItem.images[0].url} />
          <AlbumName albumName={mappedOutItem.name} albumURL={mappedOutItem.external_urls.spotify} />
          <ArtistNames artistsArray={mappedOutItem.artists} artistURL={mappedOutItem.external_urls.spotify} />
        </div>
      ))}
    </section>
  )
}