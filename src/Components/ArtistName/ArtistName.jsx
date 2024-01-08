export const ArtistName = ({ singleArtistItem }) => {
  const { artists } = singleArtistItem;

  const renderArtists = () => {
    return artists.map((artist, index) => {
      const separator = index < artists.length - 1 ? ' & ' : '';
      return (
        <span key={artist.id}>
          <a 
            href={artist.external_urls.spotify}
            target="_blank"
            rel="noreferrer noopener"
          >
            {artist.name}
          </a>
          {separator}
        </span>
      );
    });
  };

  return (
    <div className="artist-name">
      <h3>{renderArtists()}</h3>
    </div>
  );
};