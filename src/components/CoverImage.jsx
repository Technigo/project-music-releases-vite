const CoverImage = ({ image }) => {
  return (
    <article className="albumContainer">
      <div className="coverImage">
        <img src={image} alt="cover_img" />
      </div>
      <div className="overplay">
        <div className="icons">
          <img src="/icons/heart.svg" alt="heart icon" />
          <img src="/icons/play.svg" alt="play icon" />
          <img src="/icons/dots.svg" alt="dots icon" />
        </div>
      </div>
    </article>
  );
};

export default CoverImage;
