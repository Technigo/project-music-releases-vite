

export const AlbumName = ({ name, spotifyUrl }) => {
  //console.log(spotifyUrl);
    return (
      <a href={spotifyUrl} target="_blank" rel="noopener noreferrer" className="album-name">{name}</a>  
    );
};
