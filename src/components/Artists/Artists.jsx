import "./Artists.css";

export const Artists = ({ artists }) => {
  const totalArtists = artists.length;

  return (
    <div className="artistWrapper">
      {artists.map((artist, index) => (
        <span key={artist.id}>
          {totalArtists > 1 && totalArtists < 3 && index !== 0 && " & "}
          <a
            className="artistNames"
            href={artist.external_urls.spotify}
            target="_blank"
            rel="noopener noreferrer"
          >
            {artist.name}
          </a>
        </span>
      ))}
    </div>
  );
};
