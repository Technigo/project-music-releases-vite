import "../style.css";
export const CoverImage = ({ images }) => {
  return (
    <div>
      <img className="img" src={images} alt="album images" />
      <div className="iconContainer">
        <img className="icon" src="./icon/heart.svg" alt="favourite-icon" />
        <img className="icon" src="./icon/play.svg" alt="play-icon" />
        <img className="icon" src="./icon/dots.svg" alt="more-icon" />
      </div>
    </div>
  );
};
export default CoverImage;
