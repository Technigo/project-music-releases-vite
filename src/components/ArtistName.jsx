const ArtistName = ({ artists }) => {
  const formatArtist = (name) => {
    if (name.length === 2) {
      return `${name[0]} & ${name[1]}`;
    } else if (name.length > 2) {
      const lastTwoArtists = name.slice(-2).join(" & ");
      const remainingArtists = name.slice(0, -2).join(", ");
      return `${remainingArtists}, ${lastTwoArtists}`;
    } else {
      return name.join(" ");
    }
  };

  return (
    <div className="artistName">
      {artists.map((artist) => {
        const name = artist.name.split(" ");
        const formattedName = formatArtist(name);

        return (
          <a
            key={artist.id}
            href={artist.external_urls.spotify}
            target="_blank"
          >
            <span>{formattedName}</span>
          </a>
        );
      })}
    </div>
  );
};

export default ArtistName;
