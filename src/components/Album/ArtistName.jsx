export const ArtistName = (artists) => {
  return (
    <>
      {artists && (
        <>
          {artists.artists.map((artist, index) => (
            <a
              key={index}
              className="artist-name"
              target="_blank"
              href={artist.external_urls.spotify}
            >
              {index > 0 && ", "}
              {artist.name}
            </a>
          ))}
        </>
      )}
    </>
  );
};
