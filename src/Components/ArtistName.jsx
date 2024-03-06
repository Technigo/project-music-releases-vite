export const ArtistName = (props) => {
  const renderArtists = props.artists.map((artist) => artist.name).join(", ");
  return (
    <div className="artist-name">
      <p>{renderArtists}</p>
    </div>
  );
};
