// ArtistName component which is rendered using .map() using each item in the artists array. The Album component to show the artist name and a link.

import { ArtistSeparate } from "./ArtistSeparate.jsx"
import "./ArtistName.css"

// This component takes a prop named 'artistsArray', which is expected to be an array of objects representing artists. It destructures the 'artistsArray' prop from the prop objects. It then maps over the array and displays the names of the artists within an HTML structure. 
export const ArtistNames = ({ artistsArray }) => {
  return (
    <div className="artist-names">
        {artistsArray.map((mappedOutArtist, index) => (
            <h3 className="artist-name-link" key={mappedOutArtist.id}>
            <a href={mappedOutArtist.external_urls.spotify} target="_blank" rel="noopener noreferrer">{mappedOutArtist.name}<ArtistSeparate index={index} length={artistsArray.length} /></a></h3>
        ))}
    </div>
  )
}

//export default ArtistNames