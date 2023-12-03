import HeartIcon from '../../assets/icons/heart.svg';
import CirclePlayIcon from '../../assets/icons/play.svg';
import DotsIcon from '../../assets/icons/dots.svg';

export const IconButtons = () => {
  return (
    <span className="icon-container">
      {/* Heart button */}
      <button type="button" className="icon-button heart-icon">
        <img src={HeartIcon} alt="Heart Icon" className="icon heart" />
      </button>
      {/* Play button */}
      <button type="button" className="icon-button play-icon">
        <img src={CirclePlayIcon} alt="Circle Play Icon" className="icon play" />
      </button>
      {/* Dots button */}
      <button type="button" className="icon-button dots-icon">
        <img src={DotsIcon} alt="Dots Icon" className="icon dots" />
      </button>
    </span>
  );
};
