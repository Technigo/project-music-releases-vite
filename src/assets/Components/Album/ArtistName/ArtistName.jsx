export const ArtistName = ({ artistName, artistURL }) => {
  return(
    <div className="artist-name">
      <a href={artistURL}
      target="_blank"
      className="artist-link">
          <h3>{artistName}</h3>
      </a>
    </div>
  )
}