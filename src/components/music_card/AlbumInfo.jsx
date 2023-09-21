// Child component
export const AlbumInfo = ({artistName, albumName}) => {
    return (
      <div>
        <p className="albumName">{albumName}</p>
        <p className="artistName">{artistName}</p>
      </div>
    )
  };
  
  // This is a feature in React that allows me to specify default values for props in case they are not provided or are passed as undefined.
  AlbumInfo.defaultProps = {
    name: "Album info is missing",
    artists: "Artist name is missing"
  };