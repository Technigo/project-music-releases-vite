
const AlbumName = ({albumName, externalUrl}) => {
  return (
    <div className="album-name">
        <h2>
          <a href={externalUrl} target="_blank" rel="noopener noreferrer">
          {albumName}
          </a>
        </h2>
      </div>
  ) 
}

export default AlbumName