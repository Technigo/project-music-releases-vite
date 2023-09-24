import "./artistname.css";

export const ArtistName = ({ singleArtistItem }) => {
  const { artists } = singleArtistItem;

  // change how the artist name(s) is presented based of number of artists
  const artistName = artists.length === 1
    ? artists[0].name // this display a single artist's name
    : artists.length === 2
      ? `${artists[0].name} & ${artists[1].name}` // this display two artists with " & " between them
      : artists.slice(0, -1).map(artist => `${artist.name}, `).join('') + `& ${artists.slice(-1)[0].name}`; // this display multiple artists with commas and the last artist with " & "

  // create an object to hold artist information
  const artistObjects = {
    artistName, // formatted artist name
    aHref: singleArtistItem.artists[0].external_urls.spotify, // link to artist's Spotify page
    target: "_blank", // opens the link in a new tab
    rel: "noreferrer noopener", // security measure for links that open in new tabs
  };

  return (
    <div className="artist-name">
      <a 
        href={artistObjects.aHref}
        target={artistObjects.target}
        rel={artistObjects.rel} 
      >
        <p>{artistObjects.artistName}</p> 
      </a>
    </div>
  );
};

      