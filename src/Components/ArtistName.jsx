export const ArtistName = (props) => {
  const renderArtists = props.artists.map((artist, index) => (
    <a key={artist.id} href={artist.external_urls.spotify} className="artist-name">
      {artist.name}
      {index < props.artists.length - 1 ? ", " : ""}
    </a>
  ));

  return <div className="artist-container">{renderArtists}</div>;
};
