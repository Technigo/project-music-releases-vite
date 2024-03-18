/* eslint-disable react/react-in-jsx-scope */
// eslint-disable-next-line react/prop-types
const ArtistName = ({ name }) => {
  const openArtistUrl = () => {
    window.open(name[1]);
  };

  return (
    <div
      className="artistName"
      onClick={openArtistUrl}
      style={{ cursor: "pointer" }}>
      <h3>{name[0]}</h3>
    </div>
  );
};

export default ArtistName;
