export const ArtistName = ({artistName, artistUrl}) => {
  return (
    <div>
      <a href={artistUrl} className="artist-name" target="_blank" rel="noopener noreferrer">
        {artistName}
      </a>
    </div>
  )
}
