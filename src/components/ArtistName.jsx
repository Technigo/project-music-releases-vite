import ".././css_Components/ArtistName.css"


export const ArtistName = ({ artistNameItem }) => {
  const { artists } = artistNameItem;

  let artistNames = artists.map((artist, index) => (
    <span key={artist.id} class="artistList">
      <a href={artist.external_urls.spotify} target="_blank" rel="noopener noreferrer">
        {artist.name}
      </a>
      {index < artists.length - 1 && (index === artists.length - 2 ? ' & ' : ', ')}
    </span>
  ));

  return (
    <div className="artistNameWrapper">
      <h3>{artistNames}</h3>
    </div>
  );
};
