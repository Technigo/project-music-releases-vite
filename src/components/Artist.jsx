import "./styling/Artist.css"

export const Artist = ({ artists }) => {
  return (
    <div>
      {artists.map((artist, index) => (
        <div className="artist-card" key={artist.id}>
          <a
            href={artist.external_urls.spotify}
            target="_blank"
            rel="noopener noreferrer"
            className="artist-link">
            {artist.name}
          </a>
          {index + 1 < artists.length ? ',' : ''}
        </div>
      ))
      }
    </div >
  );
};