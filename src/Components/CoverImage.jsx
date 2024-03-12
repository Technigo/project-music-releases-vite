import PropTypes from "prop-types"
import Heart from "../assets/icons/heart.svg"
import Play from "../assets/icons/play.svg"
import Dots from "../assets/icons/dots.svg"
import Icon from "./Icon"
import "./Album.css"

export const CoverImage = ({ coverImg }) => {
  return (
    <div className="cover-image-container">
      <div className="cover-image">
        <img src={coverImg} alt="album cover" />
      </div>
      <div className="icon-container">
        <Icon icon={Heart} />
        <div className="play-icon">
          <Icon icon={Play} />
        </div>
        <Icon icon={Dots} />
      </div>
    </div>
  )
}

CoverImage.propTypes = {
  coverImg: PropTypes.string.isRequired,
}
