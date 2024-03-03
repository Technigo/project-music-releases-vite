import PropTypes from "prop-types";

export const CoverImage = ({src}) => {
  return (
    <div className="cover-img">
      <img src={src} alt=""  />
      <div className="hover">
        <img className="hover-heart" src="src/assets/icons/heart.svg"/>
        <img className="hover-play" src="src/assets/icons/play.svg"/>
        <img className="hover-dots" src="src/assets/icons/dots.svg"/>
      </div>
    </div>
  )
};

CoverImage.propTypes = {
  src: PropTypes.string,
}