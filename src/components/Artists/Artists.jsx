import "./artists.css";

export const Artists = ({ artists }) => {
  let artistNames;
  artists.length < 3
    ? (artistNames = artists.map((artist) => artist.name).join(" & "))
    : (artistNames = artists.map((artist) => artist.name).join(", "));
  return (
    <>
      <p className="artistNames">{artistNames}</p>
    </>
  );
};
