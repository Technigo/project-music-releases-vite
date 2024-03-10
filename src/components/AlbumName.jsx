export const AlbumName = ({albumName, albumUrl}) => {
  return (
    <div>
      <a href={albumUrl} className="album-name">
        {albumName}
      </a>
    </div>
  )
}
