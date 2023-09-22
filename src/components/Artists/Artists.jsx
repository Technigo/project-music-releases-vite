import "./artists.css";

export const Artists = ({ artists }) => {
  const totalArtists = artists.length;
  console.log(totalArtists);
  // const external_url = () => {
  //   let artistLink = artists.map((artist) => artist.external_urls.spotify);
  //   window.open(artistLink);
  //   console.log(artistLink);
  // };
  // let artistNames;
  // let artistLink2 = artists.map((artist) => artist.external_urls.spotify);

  // artists.length < 3
  //   ? (artistNames = artists.map((artist) => artist.name).join(" & "))
  //   : (artistNames = artists.map((artist) => artist.name).join(", "));
  return (
    <>
      {/* <p className="artistNames" onClick={external_url}>
        {artistNames}
      </p>
      <a className="artistNames" href={artistLink2} target="_blank"
              rel="noopener noreferrer">
        {artistNames}
      </a> */}
      {artists.map((artist, index) => (
        <span key={artist.id}>
          {totalArtists > 1 && totalArtists < 3 && index !== 0 && " & "}
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
