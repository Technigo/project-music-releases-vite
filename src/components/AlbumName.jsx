/* eslint-disable react/prop-types */
/* eslint-disable react/react-in-jsx-scope */
const AlbumName = ({ name }) => {
  console.log(name);
  const openAlbumUrl = () => {
    window.open(name[1]);
  };

  return (
    <div
      className="albumName"
      onClick={openAlbumUrl}
      style={{ cursor: "pointer" }}>
      <h2>{name[0]}</h2>
    </div>
  );
};

export default AlbumName;
