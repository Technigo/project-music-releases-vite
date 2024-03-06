export const ArtistsName = ({ artists }) => {
  return (
    <>
      {artists.map((artist, artistIndex, artistUrl) => (
        <a href={artist.external_urls.spotify} target="_blank" rel="noopener noreferrer">
          <p key={artistIndex}>{artist.name}</p>
        </a>
      ))}
    </>
  );
};
