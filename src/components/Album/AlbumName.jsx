export const AlbumName = ({ name, external_urls }) => {
  return (
    <>
      <a href={external_urls.spotify} className="album-title" target="_blank">
        {name}
      </a>
    </>
  );
};
