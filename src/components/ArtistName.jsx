export const ArtistName = ({artistName, artistUrl}) => {
  return (
    <div>
      <a href={artistUrl} className="artist-name">
        {artistName}
      </a>
    </div>
  )
}
