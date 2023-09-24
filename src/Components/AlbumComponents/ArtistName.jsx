import ArtistDevider from "./ArtistDevider" //Importing the comma and & component to apply it to the artist names

const ArtistNames = ({artistsArray}) => {
  return (
    <div className="artist-name"> 
        {artistsArray.map((mappedOutArtist, index) => ( //Using the map method to itirate through the artists and setting a uniqueidentifyer for React's virtual DOM to efficiently track and update components.
            <h3 className="artist-name" key={mappedOutArtist.id}>

              {/* Get the value from it's parent using props and adds an external link */}
              <a href={mappedOutArtist.external_urls.spotify} target="_blank" rel="noopener noreferrer">{mappedOutArtist.name}  

              {/* Inserting & and comma if there's more than 1 artist */}
              <ArtistDevider index={index} length={artistsArray.length} />
              </a>
            </h3>
        ))}
    </div>
  ) 
}
//Exporting the ArtistNames component to be reused
export default ArtistNames