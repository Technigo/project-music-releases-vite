// Child component
export const ArtistName = ({ artistName }) => {
    return (
      <div>
        <p className="artistName">{artistName}</p>
      </div>
    )
  };
  
  // This is a feature in React that allows me to specify default values for props in case they are not provided or are passed as undefined.
  ArtistName.defaultProps = {
    artists: "Artist name is missing"
  };