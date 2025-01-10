import heartIcon from '../assets/icons/heart.svg';
import playIcon from '../assets/icons/play.svg';
import dotsIcon from '../assets/icons/dots.svg';

export const HoverOverlay = () => {
  return (
    <div className="hover-overlay">
      <button className="icon-button favorite-button">
        <img src={heartIcon} alt="Favorite" />
      </button>
      <button className="icon-button play-button">
        <img src={playIcon} alt="Play" />
      </button>
      <button className="icon-button options-button">
        <img src={dotsIcon} alt="Options" />
      </button>
    </div>
  );
};

