/* eslint-disable react/react-in-jsx-scope */
import playIcon from "../assets/icons/play.svg";
import heartIcon from "../assets/icons/heart.svg";
import dotIcon from "../assets/icons/dots.svg";

export const PlayIcon = () => {
  // eslint-disable-next-line react/react-in-jsx-scope
  return <img src={playIcon} alt="Play" />;
};

export const HeartIcon = () => {
  return <img src={heartIcon} alt="Heart" />;
};

export const DotIcon = () => {
  return <img src={dotIcon} alt="Dot" />;
};
