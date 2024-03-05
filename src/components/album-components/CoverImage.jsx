import PropTypes from "prop-types";

export const CoverImage = ({ images }) => {
  const getImage = images[0].url;
    return (
      <div className="cover-image">
        <img src={getImage} alt="Album cover"></img>
      </div>
    );
};

CoverImage.propTypes = {
  images: PropTypes.array.isRequired,
};
