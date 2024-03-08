export const ArtistsName = ({ artists }) => {
  return (
    <div className="ArtistName">
      {artists.map((artist, artistIndex) => (
        <a
          key={artistIndex}
          href={artist.external_urls.spotify}
          target="_blank" // Opens in new tab
          rel="noopener noreferrer" // Provides more safety
        >
          {artist.name}
          {artistIndex < artists.length - 1 && ", "}
        </a>
      ))}
    </div>
  );
};
