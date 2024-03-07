import PropTypes from "prop-types"
import "./coverImage.css"
import playIcon from "../assets/icons/play.svg"
import heartIcon from "../assets/icons/heart.svg"
import dotsIcon from "../assets/icons/dots.svg"


export const CoverImage = ({ coverImage, albumName }) => {
    return (
      <div className="cover">
        <img src={coverImage} alt={albumName}/>
        <div className="overlay-icons">
        <img id="heart" src={heartIcon} alt="like this album" />
        <img id="play" src={playIcon} alt="play icon"/>
        <img id="dots" src={dotsIcon} alt="see more" />
        </div>
      </div>
    )
  }
  
  CoverImage.propTypes = {
    coverImage: PropTypes.string.isRequired,
    playIcon: PropTypes.string.isRequired,
    albumName: PropTypes.string.isRequired,
    heartIcon: PropTypes.string.isRequired,
    dotsIcon: PropTypes.string.isRequired,
  }