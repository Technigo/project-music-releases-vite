export const ArtistName = (props) => {
  const renderArtists = props.artists.map((artist) => artist.name).join(", ");
  return <p className="artist-name">{renderArtists}</p>;
};
