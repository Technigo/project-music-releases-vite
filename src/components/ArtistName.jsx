import ".././css_Components/ArtistName.css"


export const ArtistName = ({ artistNameItem }) => {
  const { artists } = artistNameItem;

  let artistNames = artists.map((artist, index) => (
    <span key={artist.id} class="artistList">
      <a href={artist.external_urls.spotify} target="_blank" rel="noopener noreferrer">
        {artist.name}
      </a>
      {/* This checks if the current artist is not the last one in the array && if the current artist is the second-to-last, it displays an ampersand followed by a space. For all other artists, it displays a comma followed by a space. */}
      {index < artists.length - 1 && (index === artists.length - 2 ? ' & ' : ', ')}
    </span>
  ));

  return (
    <div className="artistNameWrapper">
      <h3>{artistNames}</h3>
    </div>
  );
};
