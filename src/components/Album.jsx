import "./styling/Album.css"

export const Album = ({ name, externalUrl }) => {
  return (
    <div className="album-name">
      <a
        href={externalUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="album-link"
      >
        {name}
      </a>
    </div>
  );
};
