export const AlbumName = ({ albumName, albumUrl, key }) => {
  return (
    <div className="AlbumName">
      <a
        href={albumUrl.spotify}
        target="_blank"
        rel="noopener noreferrer"
        key={key}
      >
        {albumName}
      </a>
    </div>
  );
};
