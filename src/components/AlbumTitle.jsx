const AlbumTitle = ({ name, url }) => {
    return (
      <h2 className="album-title">
        <a href={url} target="_blank" className="album-link" aria-label="Link to Album" rel="noreferrer">
          {name}
        </a>
      </h2>
    )
  }
  
  export default AlbumTitle;
  