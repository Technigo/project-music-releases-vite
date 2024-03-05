export const ArtistName = ({ artists }) => {
  const artistNames = artists
    .map((artist) => (
      <a
        href={artist.external_urls.spotify}
        target="_blank"
        rel="noopener noreferrer"
        className="artist-name"
        key={artist.id}
      >
        {artist.name}
      </a>
    ))
    .reduce((prev, curr) => [prev, ", ", curr]);

  return <div>{artistNames}</div>;
};

{
  /*
export const ArtistName = ({ artists }) => {
  return (
    <div>
      Artist name{" "}
      {artists.map((artist) => {
        const artistName = artist.name;
        return artistName;
      }).join(", ")
      }
    </div>
  );
};
*/
}
