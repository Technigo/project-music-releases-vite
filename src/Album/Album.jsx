export const Album = ({ albumImage, albumName, artistName }) => {
  return (
    <div>
      <p>Album {albumImage}</p>
      <p>Album name {albumName}</p>
      <p>Artist name {artistName}</p>
    </div> //Artist Name (with URL)
  );
};
