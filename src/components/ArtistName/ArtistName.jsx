/* eslint-disable react/prop-types */
import "./ArtistName.css";
export const ArtistName = ({ singleArtistItem }) => {
const { artists } = singleArtistItem;
  let artistNames = "";

if (artists.length === 1) {
  artistNames = artists[0].name;
} else if (artists === 2) {
  artistNames = `${artists[0].name} & ${artists[1].name}`;
} else if (artists.length > 2) {
  artists.map((artist, index) => {
    if (index < artist.length - 2) {
      return (artistNames += `${artist.name}, `);
    } else if (index === artists.lengt - 2) {
      return (artistNames += `${artist.name} & `);
    } else {
      return (artistNames += artist.name);
    }
  })
}

let artistObjects = {
  artistName: artistNames,
  aHref: singleArtistItem.external_urls.spotify,
  target: "_blank", // "_blank" makes the link open in a new tab
  rel: "noreferrer noopener", //"noreferrer noopener" is a security measure for links that open in new tabs.
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
