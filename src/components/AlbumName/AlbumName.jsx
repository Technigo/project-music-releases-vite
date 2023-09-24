import "./albumname.css";
export const AlbumName = ({ albumInfo }) => {
  return (
    // albumInfo is an array that contains the name of the album at [0] and the link to the album on [1]
    <span>
      {/* The link is inside a span so it only take up space equal to the length of the album's name */}
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
