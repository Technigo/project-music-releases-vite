import HeartIcon from "../../assets/icons/heart.svg";
import PlayIcon from "../../assets/icons/play.svg";
import DotsIcon from "../../assets/icons/dots.svg";

export const PlayControll = () => {
  return (
    <div className="playcontroll__flex_container">
      <div className="playcontroll__image_div playcontroll__image_div_heart">
        <img src={HeartIcon} alt="heart icon" width="100%" />
      </div>
      <div className="playcontroll__image_div playcontroll__image_div_play">
        <img src={PlayIcon} alt="play icon" width="100%" />
      </div>
      <div className="playcontroll__image_div playcontroll__image_div_dots">
        <img src={DotsIcon} alt="dots icon" width="100%" />
      </div>
    </div>
  );
};
