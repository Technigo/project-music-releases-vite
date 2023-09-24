import "./CoverImage.css";
import heart from 'src/assets/icons/heart.svg'
import play from 'src/assets/icons/play.svg'
import dots from 'src/assets/icons/dots.svg'

// This component takes a prop named 'coverImage', which is expected to be a URL to the album cover image. It uses destructuring to directly extract the 'coverImage' prop from the props object. It will render an 'img' element displaying the album cover image.
export const CoverImage = ({ coverImage }) => {
    return (
      <div className="cover-image">
        <img src={coverImage} className="album-cover" alt="Cover" />  
        <div className="icon-wrapper">
          <button type="button" className="heart-icon-button">
            <img src={heart}
            alt="Heart Icon"
            className="white-icon"
            />
            </button>
          <button type="button" className="play-icon-button custom-play-button">
            <img src={play}
            alt="Play Icon"
            className="white-icon"
            />
            </button>
          <button type="button" className="dots-icon-button">
            <img src={dots}
            alt="Dots Icon"
            className="white-icon"
            />
            </button>    
        </div>    
      </div>
    );
  };

//export default CoverImage