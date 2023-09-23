import ArtistDevider from "./ArtistDevider"


const ArtistNames = ({artistsArray}) => {
  return (
    <div className="artist-name"> 
        {artistsArray.map((mappedOutArtist, index) => (
            <h3 className="artist-name" key={mappedOutArtist.id}>
              <a href={mappedOutArtist.external_urls.spotify} target="_blank" rel="noopener noreferrer">{mappedOutArtist.name}
              <ArtistDevider index={index} length={artistsArray.length} />
              </a>
            </h3>
        ))}
    </div>
  ) 
}

export default ArtistNames