import "../style.css";
export const CoverImage = ({ images }) => {
  return (
    <div className="coverImage">
      <img className="img" src={images} alt="album images" />
      <div className="iconContainer">
        <img className="iHeart" src="./icon/heart.svg" alt="favourite-icon" />
        <img className="iPlay" src="./icon/play.svg" alt="play-icon" />
        <img className="iMore" src="./icon/dots.svg" alt="more-icon" />
      </div>
    </div>
  );
};
export default CoverImage;
