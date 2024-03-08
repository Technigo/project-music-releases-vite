import PropTypes from "prop-types";
import { PlayIcons } from "../AlbumContent/PlayIcons";

export const CoverImage = ({ images, typeOfList }) => {
  const coverImage = {
    imgUrl: images,
    imgAlt: "Cover album image",
  };

  return (
    <div className="coverImage">
      <img src={coverImage.imgUrl} alt="Cover album image" />
      {typeOfList && typeOfList === "album" && <PlayIcons />}
    </div>
  );
};

// Expected data type.
CoverImage.propTypes = {
  images: PropTypes.string.isRequired,
  typeOfList: PropTypes.string,
};
