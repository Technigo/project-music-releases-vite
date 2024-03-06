import play from "../../assets/icons/play.svg";
import dots from "../../assets/icons/dots.svg";
import heart from "../../assets/icons/heart.svg";

export const PlayOverlay = () => {
  return (
      <div className="overlay">
      <div className="heart-image child-overlay">
        <img src={heart} alt="Heart image"></img>
      </div>
      <div className="play-image child-overlay">
        <img src={play} alt="Play button"></img>
      </div>
      <div className="dots-image child-overlay">
        <img src={dots} alt="Dots button"></img>
          </div>

    </div>
  );
};
