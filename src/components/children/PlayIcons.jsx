import play from "../../assets/icons/play.svg";
import heart from "../../assets/icons/heart.svg";
import dots from "../../assets/icons/dots.svg";

export const PlayIcons = () => {
  return (
    <div className="play-icons">
      <img className="icon heart" src={heart} alt="Play Icon" />
      <img className="icon play" src={play} alt="Play Icon" />
      <img className="icon dots" src={dots} alt="Play Icon" />
    </div>
  );
};
