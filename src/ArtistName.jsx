export const ArtistName = (props) => {
  const renderArtists = props.artists.map((artist, index) => <p key={index}>Artists name: {artist.name}</p>);
  return <div>{renderArtists}</div>;
};

//export const ArtistName = (props) => {
//  const artists = props.artists
//    .map((artist) => {
//      return artist.name;
//    })
//    .join(", ");
//  //const artists = props.artists.map((artist) => artist.name).join(", ");
//  return <p>{artists}</p>;
//};
//
