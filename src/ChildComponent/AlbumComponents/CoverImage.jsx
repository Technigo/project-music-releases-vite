import PropTypes from "prop-types"
import dots from "./assets/icons/dots.svg"
import heart from "./assets/icons/heart.svg"
import play from "./assets/icons/play.svg"


// eslint-disable-next-line react/prop-types
export const CoverImage = ({image}) => {
  return (
  <div className="cover-image">
    <img src={image} alt="cover image" />
    <div className="icon-wrapper">
      <img className="dots-hover" src={dots} alt="Dots" />
      <img className="heart-hover" src={heart} alt="Heart" />
      <img className="play-hover" src={play} alt="Play Button" />
    </div>
  </div>
  )
}

CoverImage.PropTypes = {
  src: PropTypes.string
}