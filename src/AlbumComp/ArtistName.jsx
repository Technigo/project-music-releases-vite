export const ArtistName = ({ artists }) => {
  return (
    <div>
      {artists.map((artist) => (
        <p className="artist-name" key={artist.id}>
          {artist.name}
        </p>
      ))}
    </div>
  );
};
export default ArtistName;
