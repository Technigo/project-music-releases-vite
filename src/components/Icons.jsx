/*Can't change the color or scale of the icons in css

*/

import playIcon from "../../public/icons/play.svg";
import heartIcon from "../../public/icons/heart.svg";
import dotIcon from "../../public/icons/dots.svg";

export const PlayIcon = () => {
  return <img src={playIcon} alt="Play" />;
};

export const HeartIcon = () => {
  return <img src={heartIcon} alt="Heart" />;
};

export const DotIcon = () => {
  return <img src={dotIcon} alt="Dot" />;
};
