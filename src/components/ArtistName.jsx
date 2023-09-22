const ArtistName = ({ artists }) => {
  console.log({ artists });
  const generateDelimiter = (index, length) => {
    if (index === length - 2) {
      return " & ";
    } else if (index < length - 2) {
      return ", ";
    }
    return;
  };

  return (
    <div className="artistName">
      {artists.map((artist, index) => {
        return (
          <a
            key={artist.id}
            href={artist.external_urls.spotify}
            target="_blank"
          >
            <span>
              {artist.name}
              {generateDelimiter(index, artists.length)}
            </span>
          </a>
        );
      })}
    </div>
  );
};

export default ArtistName;
