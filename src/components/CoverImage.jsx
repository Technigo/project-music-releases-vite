import { Icon } from "./Icon";
import Heart from "../assets/icons/heart.svg";
import Play from "../assets/icons/play.svg";
import Dots from "../assets/icons/dots.svg";

export const CoverImage = ({ image }) => {
  return (
    <>
      <div className="CoverImage">
        <img src={image} alt="Album Cover"></img>
        <div className="icons">
          <Icon src={Heart} alt="Heart" className="Heart" />
          <Icon src={Play} alt="Play" className="Play" />
          <Icon src={Dots} alt="Dots" className="Dots" />
        </div>
      </div>
    </>
  );
};
