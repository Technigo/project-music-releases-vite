export const ArtistName = ({ artists }) => {
  return (
    <div>
      {artists.map((artist, index) => (
        <span key={artist.id}>
          <a
            href={artist.external_urls.spotify}
            className="a-artist"
            target="_blank"
            rel="noreferrer"
          >
            {artist.name}
          </a>
          {index < artists.length - 1 && <span className="comma">, </span>}
        </span>
      ))}
    </div>
  );
};

export default ArtistName;
