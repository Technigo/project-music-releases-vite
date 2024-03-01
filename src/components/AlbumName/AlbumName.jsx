import "./AlbumName.css";
export const AlbumName = ({ albumInfo }) => {
  return (
    <span>
      <a
        href={albumInfo[1]}
        target="_blank"
        rel="noopener noreferrer"
        className="albumName"
      >
        {albumInfo[0]}
      </a>
    </span>
  );
};
