/* eslint-disable react/prop-types */
import "./CoverImage.css"

import dots from "../assets/icons/dots.svg"
import heart from "../assets/icons/heart.svg"
import playIcon from "../assets/icons/play.svg"

export const CoverImage = ({ image }) => {

  return (
    <div className="coverImage">
      <img src={image} alt="Album cover image" className="albumCoverImage" />
      <div className="icons">
        <img src={heart} alt="Heart" className="heart icon" />
        <img src={playIcon} alt="Play" className="play icon" />
        <img src={dots} alt="dots" className="dots icon" />
      </div>
    </div>

  )

}