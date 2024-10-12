/* eslint-disable react/prop-types */
const AlbumName = ({ name, url }) => {
  return (
    <a href={url} className="album-name" target="_blank" rel="noopener noreferrer">
      {name}
    </a>
  );
};

// Export the AlbumName component
export default AlbumName;