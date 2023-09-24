// Import SVG icons for the heart, play, and dots from their respective paths, as well as the CSS file for this component to apply styles.
import heart from "../../../../public/heart.svg"
import play from "../../../../public/play.svg"
import dots from "../../../../public/dots.svg"

import "./CoverImage.css"

// This component takes a prop named 'coverImage', which is expected to be a URL to the album cover image. It uses destructuring to directly extract the 'coverImage' prop from the props object. Then render a <div> element with the class "cover-image" to contain the album cover image and icon buttons. It will render an 'img' element displaying the album cover image. Render a <div> element with the class "icon-wrapper" to contain the icon buttons.
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
  )
}