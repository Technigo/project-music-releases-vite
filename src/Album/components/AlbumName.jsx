export const AlbumName = ({ album }) => {
  return (
    <a href={album.external_urls.spotify}>
      <h3 className="album-name">{album.name}</h3>
    </a>
  );
};
