import "./AlbumName.css";

export const AlbumName = ({ albumName, albumURL }) => {
  return (
    <div className="album-title-link">
      <h2>
        <a href={albumURL} target="_blank" rel="noopener noreferrer">
          {albumName}
        </a>
      </h2>
    </div>
  );
};
