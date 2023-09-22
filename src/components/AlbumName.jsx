const AlbumName = ({ name, external_urls }) => {
  return (
    <div className="albumName">
      <a href={external_urls} target="_blank" rel="noopener noreferrer">
        <h2>{name}</h2>
      </a>
    </div>
  );
};

export default AlbumName;
