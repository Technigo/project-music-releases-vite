const ArtistName = ({ name, url }) => {
  return (
    <div className="artistName">
      <h3>
        <a href={url} target="_blank">
          {name}{" "}
        </a>
      </h3>
    </div>
  );
};

export default ArtistName;

ArtistName.defaultProps = {
  name: "Usha",
  url: "Programmer",
};
