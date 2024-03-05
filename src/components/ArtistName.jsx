export const ArtistName = ({ artistList }) => {
  const showArtists = artistList.map((artist) => {
    return <span>{artist.name}</span>;
  });

  return <div>{showArtists}</div>;
};
