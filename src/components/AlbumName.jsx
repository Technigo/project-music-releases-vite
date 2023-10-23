export const AlbumName = ({ name, external_urls }) => {
  const onAlbumClicked = () => {
    window.open(external_urls, "_blank");
  };

  return (
    <div onClick={onAlbumClicked} className="Album">
      <h2>{name}</h2>
    </div>
  );
};
