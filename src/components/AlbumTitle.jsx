export const AlbumTitle = ({ album }) => {
  return (
    <a
      href={album.external_urls.spotify}
      target="_blank"
      rel="noopener noreferrer"
      className="album-title"
      aria-label={`Listen to ${album.name} on Spotify`}
    >
      <h3>{album.name}</h3>
    </a>
  );
};

export default AlbumTitle;