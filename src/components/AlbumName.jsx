
// Component representing the name of each album.
export const AlbumName = ({ name, spotifyUrl, id }) => {
 
    return (
     
      <a href={spotifyUrl} target="_blank" rel="noopener noreferrer" className="album-name">{name}</a>  
    );
};
