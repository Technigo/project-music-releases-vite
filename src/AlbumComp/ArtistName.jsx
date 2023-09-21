export const ArtistName = ({ artists }) => {
  return (
    <div>
      Artist Name:
      {artists.map((artist) => (
        <span key={artist.id}>{artist.name}</span>
      ))}
    </div>
  );
};
export default ArtistName;
