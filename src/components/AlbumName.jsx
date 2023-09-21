// Child component
export const AlbumName = ({ albumName }) => {
    return (
      <div>
        <p className="albumName">{albumName}</p>
      </div>
    )
  };
  
  // This is a feature in React that allows me to specify default values for props in case they are not provided or are passed as undefined.
  AlbumName.defaultProps = {
    name: "Album info is missing",
  };