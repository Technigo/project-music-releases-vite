export const AlbumName = ({ name, external_urls }) => {
  return (
    <div className="a-links">
    <a style={{textDecoration: "none"}} href={external_urls} target="_blank">
      {name} 
    </a></div>
  );
 
  }

