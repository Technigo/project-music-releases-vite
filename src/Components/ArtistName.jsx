
const ArtistNames = ({artistsArray}) => {
  return (
    <div className="artist-wrapper"> 
        {artistsArray.map((mappedOutArtist) => (
            <h3 className="artist-name" key={mappedOutArtist.id}>
                {mappedOutArtist.name}
            </h3>
        ))}
    </div>
  ) 
}

export default ArtistNames