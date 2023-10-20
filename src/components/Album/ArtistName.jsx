import "../index.css";

export const ArtistName = ({ name, type }) => {
  return (
    <div className="artistname">
      <p>
        <span>Name:</span>
        {name}
      </p>
      <p>
        <span>Type:</span>
        {type}
      </p>
    </div>
  );
};

ArtistName.defaultProps = {
  name: "Usha",
  type: "Programmer",
};
