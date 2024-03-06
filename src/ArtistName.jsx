export const ArtistName = (props) => {
  console.log(props.artists);
  const renderArtists = props.artists.map((artist) => <p key={artists.name}>Artists name: {artists.name}</p>);
  return <>{renderArtists}</>;
};
