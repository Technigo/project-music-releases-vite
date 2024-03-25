export const AlbumName = ({ albumName, albumUrl }) => {
  return (
    <div>
      <a href={albumUrl} target="_blank" rel="noopener noreferrer" className="album-link">
        <h2>{albumName}</h2>
      </a>
    </div>
  );
};
