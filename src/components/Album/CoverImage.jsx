const CoverImage = ({ albumName, url }) => {
  return (
    <div className="coverImageWrapper">
      <img className="coverImage" src={url} alt={albumName} />
      <span className="iconWrapper">
        <button type="button" className="heartIcon">
          <img src="../src/assets/icons/heart.svg" />
        </button>
        <button type="button" className="playIcon">
          <img src="../src/assets/icons/play.svg" />
        </button>
        <button type="button" className="dotsIcon">
          <img src="../../src/assets/icons/dots.svg" />
        </button>
      </span>
    </div>
  );
};

export default CoverImage;
