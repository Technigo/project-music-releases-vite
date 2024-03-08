import PropTypes from "prop-types";
import playIcon from "../assets/icons/play.svg";
import heartIcon from "../assets/icons/heart.svg";
import dotsIcon from "../assets/icons/dots.svg";

export const CoverImage = ({ imageUrl, externalUrl }) => {
  return (
    <div className="album-cover-container">
      <img src={imageUrl} alt="Album Cover" className="album-cover-image" />
      <div className="overlay">
        <img
          className="favorite-icon icon"
          width={20}
          height={20}
          src={heartIcon}
        />
        <a
          href={externalUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="play"
        >
          <img
            className="play-icon icon"
            width={48}
            height={48}
            src={playIcon}
          />
        </a>
        <img className="dots-icon icon" width={20} height={20} src={dotsIcon} />
      </div>
    </div>
  );
};

CoverImage.propTypes = {
  imageUrl: PropTypes.string.isRequired,
  externalUrl: PropTypes.string.isRequired,
};
