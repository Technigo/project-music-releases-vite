import "./albumname.css";
export const AlbumName = ({ albumInfo }) => {
  const externalLink = () => {
    window.open(albumInfo[1]);
  };

  return (
    <p className="albumName" onClick={externalLink}>
      {albumInfo[0]}
    </p>
  );
};
