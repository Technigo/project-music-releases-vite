const AlbumName = ({ name }) => {
  console.log(name);
  const openAlbumUrl = () => {
    window.open(name[1]);
  };
  /* console.log(external_urls.spotify, "spotify");*/
  return (
    <div
      className="albumName"
      onClick={openAlbumUrl}
      style={{ cursor: "pointer" }}
    >
      <h2>{name[0]}</h2>
    </div>
  );
};

export default AlbumName;
