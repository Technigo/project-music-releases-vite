export const ArtistsName = ({ artists }) => {
  return (
    <div className="ArtistName">
      {artists.map((artist, artistIndex) => (
        <a
          key={artistIndex}
          href={artist.external_urls.spotify}
          target="_blank"
          rel="noopener noreferrer"
        >
          {artist.name}
        </a>
      ))}
    </div>
  );
};
