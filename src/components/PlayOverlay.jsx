import './styling/albums.css'; 
import play from '../assets/icons/play.svg';
import dots from '../assets/icons/dots.svg';
import heart from '../assets/icons/heart.svg';

const PlayOverlay = () => {
  return (
    <div className="album-hover">  
      <div className="heart-image child-overlay">
        <img src={heart} alt="Heart image" />
      </div>
      <div className="play-image child-overlay">
        <img src={play} alt="Play button" />
      </div>
      <div className="dots-image child-overlay">
        <img src={dots} alt="Dots button" />
      </div>
    </div>
  );
};

export default PlayOverlay;
