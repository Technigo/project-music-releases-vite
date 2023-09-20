const CoverImage = ({ image }) => {
  return (
    <article className="albumContainer">
      <div className="coverImage">
        <img src={image} alt="cover_img" />
      </div>
      <div className="overplay">
        <div className="icons">
          <img src="../public/heart.svg" alt="heart icon" />
          <img src="../public/play.svg" alt="play icon" />
          <img src="../public/dots.svg" alt="dots icon" />
        </div>
      </div>
    </article>
  );
};

export default CoverImage;
