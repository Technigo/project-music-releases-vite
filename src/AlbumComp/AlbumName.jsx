import "../style.css";
export const AlbumName = ({ albums, albumUrl }) => {
  return (
    <>
      <a href={albumUrl} className="a" target="_blank" rel="noreferrer">
        {albums}
      </a>
    </>
  );
};
export default AlbumName;
