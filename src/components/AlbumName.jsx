const AlbumName = ({ name, external_urls }) => {
  const openAlbumUrl = () => {
    window.open(external_urls && external_urls.spotify);
  };

  return (
    <div
      className="albumName"
      onClick={openAlbumUrl}
      style={{ cursor: "pointer" }}
    >
      <h2>{name}</h2>
    </div>
  );
};

export default AlbumName;
