import HeartIcon from "../../assets/icons/heart.svg";
import PlayIcon from "../../assets/icons/play.svg";
import DotsIcon from "../../assets/icons/dots.svg";
import "./PlayControll.css";

export const PlayControll = () => {
  return (
    <div className="playcontroll__flex_container">
      <div className="playcontroll__image_div">
        <img src={HeartIcon} alt="heart icon" width="50" />
      </div>
      <div className="playcontroll__image_div">
        <img src={PlayIcon} alt="play icon" width="50" />
      </div>
      <div className="playcontroll__image_div">
        <img src={DotsIcon} alt="dots icon" width="50" />
      </div>
    </div>
  );
};
