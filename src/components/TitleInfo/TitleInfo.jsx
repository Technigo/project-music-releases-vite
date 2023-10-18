export const TitleInfo = ({ name, artists, external_urls }) => {
  return (
    <>
      <a href={external_urls}>{name}</a>
      {artists.map((artist, index) => (
        <div key={index}>
          <a href={artist.external_urls.spotify}>{artist.name}</a>
        </div>
      ))}
    </>
  );
};

TitleInfo.defaultProps = {
  name: "Album title is missing",
};
