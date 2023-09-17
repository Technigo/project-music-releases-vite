import "./ArtistName.css";

export const ArtistName = ({ singleArtistItem }) => {
  const { artists } = singleArtistItem;
  let artistNames = "";

  if (artists.length === 1) {
    artistNames = artists[0].name;
  } else if (artists.length === 2) {
    artistNames = `${artists[0].name} & ${artists[1].name}`;
  } else if (artists.length > 2) {
    artists.map((artist, index) => {
      if (index < artists.length - 2) {
        return (artistNames += `${artist.name}, `);
      } else if (index === artists.length - 2) {
        return (artistNames += `${artist.name} & `);
      } else {
        return (artistNames += artist.name);
      }
    });
  }

  let artistObject = {
    headingThree: artistNames,
    aHref: singleArtistItem.external_urls.spotify,
    target: "_blank",
    rel: "noreferrer noopener",
    class: "artistName",
  };

  return (
    <div className={artistObject.class}>
      <a
        href={artistObject.aHref}
        target={artistObject.target}
        rel={artistObject.rel}
      >
        <h3>{artistObject.headingThree}</h3>
      </a>
    </div>
  );
};
