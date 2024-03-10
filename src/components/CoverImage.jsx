import heart from '../assets/heart.svg';
import play from '../assets/play.svg';
import dots from '../assets/dots.svg';


// Component representing the cover image of each album.
export const CoverImage = ({ imageUrl }) => {
   
  return (
    <div className="coverImageWrapper">

       
  <img className="coverImage" src={imageUrl} alt="Album cover" />
  
  
  <div className="iconGroup">
                <img src={heart} alt="Heart Icon" className="icon" />
                <img src={play} alt="Play Icon" className="icon play-icon" />
                <img src={dots} alt="Dots Icon" className="icon" />             
     </div>
  </div>
  );
};
