import heart from '../assets/heart.svg';
import play from '../assets/play.svg';
import dots from '../assets/dots.svg';
import firstplay from '../assets/firstplay.svg';


export const CoverImage = ({ imageUrl }) => {
   // console.log('Image Url:', imageUrl);
  return (
    <div className="coverImageWrapper">
  <img className="coverImage" src={imageUrl} alt="Album cover" />
  <div className="iconGroup">
                <img src={heart} alt="Heart Icon" className="icon" />
                <img src={play} alt="Play Icon" className="icon play-icon" />
        <img src={firstplay} alt="First Play Icon" className="icon firstplay-icon" />
                <img src={dots} alt="Dots Icon" className="icon" />             
     </div>
  </div>
  );
};
