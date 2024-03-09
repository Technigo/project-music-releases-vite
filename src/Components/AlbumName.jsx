
export const AlbumName = ({ albumUrl, albumName }) => {
  return (
    <a href={albumUrl}>
    <h2>{albumName}</h2>
    </a>
  )
}

AlbumName.defaultProps = {
  albumName: "Name is missing"
};

