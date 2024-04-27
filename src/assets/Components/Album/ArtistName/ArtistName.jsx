export const ArtistName = ({ artists }) => {

  return (
    <div className="artist-name">
      {artists.map((artist, index) => (
        <a
          href={artist.external_urls.spotify}
          key={artist.index}
          target="_blank"
          rel="noreferrer"
          className="artist-link">
          <h3>
            <span>
              {artist.name}
              {index < artists.length - 1 && ", "}
            </span>
          </h3>
        </a>
      ))}
    </div>
  );
};