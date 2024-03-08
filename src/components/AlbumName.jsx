export const AlbumName = ({ albumName, albumUrl, key }) => {
  return (
    <div className="AlbumName">
      <a
        href={albumUrl.spotify}
        target="_blank" // Opens in new tab
        rel="noopener noreferrer" // Provides more safety.
        key={key}
      >
        {albumName}
      </a>
    </div>
  );
};
