// ArtistName component which is rendered using .map() using each item in the artists array. The Album component to show the artist name and a link.

import "./ArtistName.css"

// This component takes a prop named 'artistsArray', which is expected to be an array of objects representing artists. It destructures the 'artistsArray' prop from the prop objects. It then maps over the array and displays the names of the artists within an HTML structure. 
export const ArtistNames = ({ artistsArray }) => {
  return (
    <div className="artist-names">
        {artistsArray.map((mappedOutArtist) => (
            <h3 className="artist-name" key={mappedOutArtist.id}>{mappedOutArtist.name}
            </h3>
        ))}
    </div>
  )
}

//export default ArtistNames