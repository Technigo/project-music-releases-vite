export const ArtistItem = ({ name, url, type, isLast, isNextToLast }) => {
  return (
    <>
      {name && name.length > 0 ? (
        <>
          <a
            className="artist__link"
            href={url}
            target="_blank"
            rel="noreferrer"
          >
            <span className="sr-only">{type}:</span> {name}
          </a>
          {/* Determine how to format when there are multiple artists for a track */}
          {!isLast && !isNextToLast && ", "}
          {isNextToLast && " & "}
        </>
      ) : (
        <span>Unknown artist</span>
      )}
    </>
  );
};
