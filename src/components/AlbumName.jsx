
// Component representing the name of each album.
export const AlbumName = ({ name, spotifyUrl, id }) => {
 
    return (
      {/* Link to the album on Spotify */}
      <a href={spotifyUrl} target="_blank" rel="noopener noreferrer" className="album-name">{name}</a>  
    );
};
