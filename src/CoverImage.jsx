import PropTypes from "prop-types";

export const CoverImage = ({src}) => {
  return (
    <div className="cover-img">
      <img src={src} alt=""  />
      <div className="hover">
        <img className="hover-heart" src="./assets/icons/heart.svg"/>
        <img className="hover-play" src="./assets/icons/play.svg"/>
        <img className="hover-dots" src="./assets/icons/dots.svg"/>
      </div>
    </div>
  )
};

CoverImage.propTypes = {
  src: PropTypes.string,
}