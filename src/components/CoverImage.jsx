const CoverImage = ({ image }) => {
  return (
    <article className="albumContainer">
      <div className="coverImage">
        <img src={image} alt="cover_img" />
      </div>
      <div className="overplay">
        <div className="icons">
          <img src="./heart.svg" alt="heart icon" />
          <img src="./play.svg" alt="play icon" />
          <img src="./dots.svg" alt="dots icon" />
        </div>
      </div>
    </article>
  );
};

export default CoverImage;
