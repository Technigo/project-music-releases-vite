export const ArtistName = ({ name, spotifyUrl }) => {
    //console.log('Artist name:', name);
    return (
    <a href={spotifyUrl} target="_blank" rel="noopener noreferrer" className="artist-name">{name}</a>
    );
  };