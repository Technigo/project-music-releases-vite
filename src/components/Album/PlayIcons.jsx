import play from "../../assets/icons/play.svg";
import heart from "../../assets/icons/heart.svg";
import dots from "../../assets/icons/dots.svg";

export const PlayIcons = () => {
  return (
    <>
      <img className="play-icon play" src={play} alt="" />
      <img className="play-icon heart" src={heart} alt="" />
      <img className="play-icon dots" src={dots} alt="" />
    </>
  );
};
