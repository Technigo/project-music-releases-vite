export const AlbumName = (props) => {
  return (
    <div className="album-name">
      <a
        // Add link to album
        href={props.albumcard.external_urls.spotify}
        target="_blank"
        rel="noopener noreferrer"
      >
        {/* Show album name for link */}
        <h2>{props.albumcard.name}</h2>
      </a>
    </div>
  );
};