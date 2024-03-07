import { PlayIcons } from "./PlayIcons";
import PropTypes from "prop-types";

export const CoverImage = ({ images }) => {
  const coverImage = {
    imgUrl: images,
    imgAlt: "Cover album image",
  };

  return (
    <div className="coverImage">
      <PlayIcons />
      <img src={coverImage.imgUrl} alt="Cover album image" />
    </div>
  );
};

// Expected data type.
CoverImage.propTypes = {
  images: PropTypes.string.isRequired,
};
