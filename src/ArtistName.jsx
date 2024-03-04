import "./ArtistName.css";

export const ArtistName = ({ artists }) => {
  return (
    <span className="artistName">
      {artists.map((artist) => artist.name).join(", ")}
    </span>
  );
};
