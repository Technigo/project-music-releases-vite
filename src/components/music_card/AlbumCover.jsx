
// Child component
export const AlbumCover = ({ imageUrl, altText }) => {
    return (
      <div className="album_cover">
        <img src={imageUrl} alt={altText} />
      </div>
    );
  };

   // This is a feature in React that allows me to specify default values for props in case they are not provided or are passed as undefined.
   AlbumCover.defaultProps = {
    imageUrl: "Album cover is missing",
    altText: "Album name is missing"
  };