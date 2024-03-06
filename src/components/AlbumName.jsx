export const AlbumName = ({ albumName, albumUrl, key }) => {
  return (
    <a href={albumUrl.spotify} target="_blank" rel="noopener noreferrer">
      <h4 key={key}>{albumName}</h4>
    </a>
  );
};
