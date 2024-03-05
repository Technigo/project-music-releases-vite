export const AlbumName = ({ title, externalUrl }) => {
  return (
   
      <a
        href={externalUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="album-name"
      >
        {title}
      </a>
    
  );
};
