import play from "../../assets/icons/play.svg";
import heart from "../../assets/icons/heart.svg";
import dots from "../../assets/icons/dots.svg";

export const PlayIcons = () => {
  return (
    <div className="play-icons-container">
      <img
        className="play-icon heart"
        src={heart}
        alt="Heart Icon"
        width={50}
        height={50}
      />
      <img
        className="play-icon play"
        src={play}
        alt="Play Icon"
        width={50}
        height={50}
      />
      <img
        className="play-icon dots"
        src={dots}
        alt="Dots Icon"
        width={50}
        height={50}
      />
    </div>
  );
};
