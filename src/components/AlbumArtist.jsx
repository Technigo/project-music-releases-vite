const AlbumArtist = ({ artists = [] }) => {
    return (
      <p className="album-artist">
      {artists.map((artist, index) => (
        <span key={artist.id}>
          <a
            href={artist.external_urls.spotify}
            target="_blank"
            className="album-artist-link"
            aria-label={`Link to artist ${artist.name}`}
            rel="noopener noreferrer"
          >
            {artist.name}
          </a>
          {index < artists.length - 1 && ' & '}
        </span>
      ))}
    </p>
    )
}

export default AlbumArtist