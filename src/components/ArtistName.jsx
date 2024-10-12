/* eslint-disable react/prop-types */
const ArtistName = ({ name, url, isLast }) => {
  return (
    <>
      <a href={url} target="_blank" rel="noopener noreferrer" className="artist-name">
        {name}
      </a>
      {!isLast && ", "}
    </>
  );
};

// Export the ArtistName component
export default ArtistName;
