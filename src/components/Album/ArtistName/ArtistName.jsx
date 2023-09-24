// Import the "ArtistSeparate" component from the "ArtistSeparate.jsx" file and import the CSS file for this component to apply styles.
import { ArtistSeparate } from "./ArtistSeparate.jsx"

import "./ArtistName.css"

// This component takes a prop named 'artistsArray' and destructures it from the props object as well as render a <div> element with the class "artist-name-link" to contain the artist names. Then uses the .map() method to iterate over the 'artistsArray' and render artist names. The 'key' prop is set to 'mappedOutArtist.id' to identify each artist uniquely. Inside the <h3>, it render an <a> link with the artist's name and Spotify link. Includes the "ArtistSeparate" component, passing 'index' and 'length' as props.
export const ArtistNames = ({ artistsArray }) => {
  return (
    <div className="artist-name-link">
      {artistsArray.map((mappedOutArtist, index) => (
        <h3 className="artist-names" key={mappedOutArtist.id}>
        <a href={mappedOutArtist.external_urls.spotify} target="_blank" rel="noopener noreferrer">
          {mappedOutArtist.name}<ArtistSeparate index={index} length={artistsArray.length} /></a></h3>
      ))}
    </div>
  )
}