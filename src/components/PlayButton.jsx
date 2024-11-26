import playIcon from "../assets/icons/play.svg";
import PropTypes from "prop-types";

export const PlayButton = ({ albumUrl }) => {
  const handlePlayClick = () => {
    window.open(albumUrl, "_blank", "noopener,noreferrer")
  }
  return (
    <span className="play-button-container">
      <button type="button" aria-label="play" className="play-button" onClick={handlePlayClick}>
        <img src={playIcon} className="play-icon" />
      </button>
    </span>
  )
}

PlayButton.propTypes = {
  albumUrl: PropTypes.string.isRequired,
}