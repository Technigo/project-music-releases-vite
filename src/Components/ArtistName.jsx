
const ArtistNames = ({artistsArray}) => {
  return (
    <div className="artist-name"> 
        {artistsArray.map((mappedOutArtist) => (
            <h3 className="artist-name" key={mappedOutArtist.id}>
              <a href={mappedOutArtist.external_urls.spotify} target="_blank" rel="noopener noreferrer">
                {mappedOutArtist.name}
                </a>
            </h3>
        ))}
    </div>
  ) 
}

export default ArtistNames