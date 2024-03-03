export const ArtistName = (artists) => {
  const artistName = artists.artists;

  return (
    <>
      {artistName && (
        <>
          {artistName.map((artist, index) => (
            <a
              key={index}
              href={artist.external_urls.spotify}
              className="artist-name"
              target="_blank"
            >
              {artist.name}
            </a>
          ))}
        </>
      )}
    </>
  );
};
