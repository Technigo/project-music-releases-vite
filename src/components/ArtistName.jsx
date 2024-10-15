const ArtistName = ({ artists }) => {  

  const links = artists.reduce((acc, artist, index) => {
    const link = (
      <a 
        key={artist.id}
        href={artist.external_urls.spotify} 
        target="_blank">
        {artist.name}
      </a>
    );
  
    if (index === 0) {
      return [link];
    } else if (index === artists.length - 1) {
      return [...acc, ' & ', link];
    } else {
      return [...acc, ', ', link];
    }
  }, []);

    return (
      <span className="artist-name">
        {links}
      </span>
    );
  }; 
  
  export default ArtistName;

{/*What about if there are 3 or more artists? I was suggested to have it solved by mapping each artist to a link, and joining the links differently depending on if they are the first, last or in between.*/}
  