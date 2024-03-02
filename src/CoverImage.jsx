import PropTypes from "prop-types";

export const CoverImage = ({src}) => {
  return (
    <img src={src} alt="" />
  )
};

CoverImage.propTypes = {
  src: PropTypes.string,
}