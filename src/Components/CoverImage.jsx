import PropTypes from "prop-types"
import Icon from "./Icon"
import Heart from "../assets/icons/heart.svg"
import Play from "../assets/icons/play.svg"
import Dots from "../assets/icons/dots.svg"


import "./Album.css"

export const CoverImage = ({ coverImg }) => {
  return (
    <div className="cover-image-container">
      <div className="cover-image">
        <img src={coverImg} alt="album cover" />
      </div>
     <div className="icon-container">
      <Icon icon={Heart}/>
      <Icon icon={Play}/>
      <Icon icon={Dots}/>
     </div>
    </div>
  )
}

CoverImage.propTypes = {
  coverImg: PropTypes.string.isRequired,
}

export default CoverImage
