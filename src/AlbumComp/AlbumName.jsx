import "../style.css";
export const AlbumName = ({ albums, albumUrl }) => {
  return (
    <div className="album-name">
      <a href={albumUrl} className="a" target="_blank" rel="noreferrer">
        {albums}
      </a>
    </div>
  );
};
export default AlbumName;
