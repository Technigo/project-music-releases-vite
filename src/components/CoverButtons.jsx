import heart from "../assets/icons/heart.svg";
import dots from "../assets/icons/dots.svg";
import play from "../assets/icons/play.svg";

export const CoverButtons = () => {
  return (
    <div className="CoverButtonsDiv fade">
      <img className="CoverButton" src={heart} alt="play" />
      <img className="CoverButton PlayButton" src={play} alt="play" />
      <img className="CoverButton" src={dots} alt="play" />
    </div>
  );
};
