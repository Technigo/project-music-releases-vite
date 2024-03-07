import PropTypes from "prop-types"
import Icon from "./Icon"
import Heart from "../assets/icons/heart.svg"
import Play from "../assets/icons/play.svg"
import Dots from "../assets/icons/dots.svg"

import "./Album.css"

export const CoverImage = ({ coverImg, albumUrl }) => {
  return (
    <div className="cover-image-container">
      <div className="cover-image">
        <img src={coverImg} alt="album cover" />
      </div>
      <div className="icon-container">
        <Icon icon={Heart} />
        <a
          className="play-icon"
          href={albumUrl}
          target="_blank"
          rel="noopener noreferrer">
          <Icon icon={Play} />
        </a>
        <Icon icon={Dots} />
      </div>
    </div>
  )
}

CoverImage.propTypes = {
  coverImg: PropTypes.string.isRequired,
  albumUrl: PropTypes.string.isRequired,
}

export default CoverImage
