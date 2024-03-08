import PropTypes from "prop-types";
import { PlayIcons } from "../AlbumContent/PlayIcons";

export const CoverImage = ({ images, typeOfList }) => {
  const imgWidth = typeOfList === "album" ? 300 : 90;

  const coverImage = {
    imgUrl: images,
    imgAlt: "Cover album image",
    width: imgWidth,
    heigth: "auto",
  };

  return (
    <div className="coverImage">
      <img
        src={coverImage.imgUrl}
        alt="Cover album image"
        width={coverImage.width}
        height={coverImage.heigth}
      />
      {typeOfList && typeOfList === "album" && <PlayIcons />}
    </div>
  );
};

// Expected data type.
CoverImage.propTypes = {
  images: PropTypes.string.isRequired,
  typeOfList: PropTypes.string,
};
