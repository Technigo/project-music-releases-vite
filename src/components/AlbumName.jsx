

export const AlbumName = ({ name, spotifyUrl }) => {
  //console.log('Album Name:', name);
    return (
      <a href={spotifyUrl} target="_blank" rel="noopener noreferrer" className="album-name">{name}</a>  
    );
};
