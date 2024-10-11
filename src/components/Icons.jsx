import "./styling/Icons.css"
import heartIcon from '../assets/icons/heart.svg';
import playIcon from '../assets/icons/play.svg';
import dotsIcon from '../assets/icons/dots.svg';

export const Icons = () => {
  return (
    <div className="icons-container">
      <img className="icon-1" src={heartIcon} alt="heart" />
      <img className="icon-2" src={playIcon} alt="play" />
      <img className="icon-3" src={dotsIcon} alt="dots" />
    </div>
  );
};

