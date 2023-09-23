

export const AlbumCover = ({ imageUrl, altText }) => {
  return (
    <div className="album_cover">
      <img src={imageUrl} alt={altText} />
      <span className="icon-wrapper">
            <button type="button" className="icon heartIcon">
                <img src="./assets/heart.svg" alt="heart icon" />
            </button>
            <button type="button" className="icon playIcon">
                <img src="./assets/play.svg" alt="play icon" />
            </button>
            <button type="button" className="icon dotsIcon">
                <img src="./assets/dots.svg" alt="three dots icon" />
            </button>
        </span>
    </div>
  );
};

// This is a feature in React that allows me to specify default values for props in case they are not provided or are passed as undefined.
AlbumCover.defaultProps = {
  imageUrl: "Album cover is missing",
  altText: "Album name is missing"
};