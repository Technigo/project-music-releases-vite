import "./TitleInfo.css";

export const TitleInfo = ({ name, artists, external_urls }) => {
  return (
    <>
      <a className="title_span" href={external_urls}>
        {name}
      </a>
      <div className="artist_span">
        {artists.map((artist, index) => (
          <a key={index} href={artist.external_urls.spotify}>
            <span>{artist.name}</span>
          </a>
        ))}
      </div>
    </>
  );
};

TitleInfo.defaultProps = {
  name: "Album title is missing",
  artist: "Artists are missing",
  external_urls: "Link is missing",
};
