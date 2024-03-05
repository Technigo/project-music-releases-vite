import PropTypes from "prop-types";

export const CoverImage = ({ images }) => {
  const getImage = images[0].url;
  return <img src={getImage} alt="Album cover"></img>;
};

CoverImage.propTypes = {
  images: PropTypes.array.isRequired,
};
