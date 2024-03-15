export const AlbumName = ({ name, external_urls }) => {
  return (
    <div className="album-link">
      <a href={external_urls} target="_blank">
        {name}
      </a>
    </div>
  );
};
