/* eslint-disable react/prop-types */
import "./ArtistName.css";

export const ArtistName = ({ singleArtistItem }) => {
  const { artists } = singleArtistItem;
  let artistNames = "";

  if (artists.length === 1) {
    artistNames = artists[0].name;
  } else if (artists.length === 2) {
    artistNames = `${artists[0].name} & ${artists[1].name}`;
  } else if (artists.length > 2) {
    artists.map((artist, index) => { //If there are more than two artists, it iterates through the artists array using the map function
      if (index < artists.length - 2) {
        return (artistNames += `${artist.name}, `); // puts out the two first artists with a comma and space between
      } else if (index === artists.length - 2) {
        return (artistNames += `${artist.name} & `);// If the condition is met (meaning it's the second-to-last artist), it appends the current artist's name followed by " & "
      } else {
        return (artistNames += artist.name);
      }
    });
  }

let artistObjects = {
  artistName: artistNames,
  aHref: singleArtistItem.artists[0].external_urls.spotify, //the link to the artist page on Spotify
  target: "_blank", // makes the link open in a new tab
  rel: "noreferrer noopener", // a security measure for links that open in new tabs.
}

  return (
    <div className="artist-name">
      <a 
      href={artistObjects.aHref}
      target={artistObjects.target}
      rel={artistObjects.rel} 
      >
        <h3>{artistObjects.artistName}</h3>
        </a>
    
    </div>
  )
}
