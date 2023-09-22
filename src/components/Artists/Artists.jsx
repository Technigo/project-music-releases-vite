import "./artists.css";

export const Artists = ({ artists }) => {
  const external_url = () => {
    let artistLink = artists.map((artist) => artist.external_urls.spotify);
    window.open(artistLink);
    console.log(artistLink);
  };
  let artistNames;

  artists.length < 3
    ? (artistNames = artists.map((artist) => artist.name).join(" & "))
    : (artistNames = artists.map((artist) => artist.name).join(", "));
  return (
    <>
      <p className="artistNames" onClick={external_url}>
        {artistNames}
      </p>
    </>
  );
};
