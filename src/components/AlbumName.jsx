export const AlbumName = ({ name, externalUrl }) => {
  return (
    <div>
      <a
        href={externalUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="album-name"
      >
        {name}
      </a>
    </div>
  );
};
