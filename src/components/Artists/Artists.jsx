import "./artists.css";

export const Artists = ({ artists }) => {
  const totalArtists = artists.length;

  return (
    <>
      {/* The artist info is inside a span so it only take up space equal to the length of the artist(s) name */}
      {artists.map((artist, index) => (
        <span key={artist.id}>
          {/*If the number of artists is 2, each artist will be separated by a & unless it is the first item in the array */}
          {totalArtists > 1 && totalArtists < 3 && index !== 0 && " & "}
          {/*If the number of artists is 3 or more, each artist will be separated by a , unless it is the first item in the array */}
          {totalArtists > 2 && index !== 0 && ", "}
          <a
            className="artistNames"
            href={artist.external_urls.spotify}
            target="_blank"
            rel="noopener noreferrer"
          >
            {artist.name}
          </a>
        </span>
      ))}
    </>
  );
};
