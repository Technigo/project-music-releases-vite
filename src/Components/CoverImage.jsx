import HeartIcon from "../assets/icons/heart.svg";
import PlayIcon from "../assets/icons/play.svg";
import Dots from "../assets/icons/dots.svg";

export const CoverImage = (props) => {
  const albumImage = props.coverImages[0];
  return (
    <div className="cover-image-container">
      <img className="cover-image" src={albumImage.url} alt="Music album cover image" />
      <img src={HeartIcon} className="heart-icon" alt="Heart icon" />
      <img src={PlayIcon} className="play-icon" alt="Play icon" />
      <img src={Dots} className="dots-icon" alt="Dots icon" />
    </div>
  );
};
