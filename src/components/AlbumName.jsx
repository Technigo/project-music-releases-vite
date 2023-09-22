const AlbumName = ({ title, link }) => {
  return (
    <div className="album-name">
      <a href={link} target="_blank" rel="noopener noreferrer">
        <h2>{title}</h2>
      </a>
    </div>
  );
};

export default AlbumName;
