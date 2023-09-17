// import { Buttons } from "./Buttons/Buttons";
import "./CoverImage.css";

export const CoverImage = ({ singleCoverItem }) => {
  const imageIndex = 0;
  let imgObject = {
    imgSrc: singleCoverItem.images[imageIndex].url,
    imgAlt: singleCoverItem.name,
  };

  return (
    <div className="cover-image-wrapper">
      <img src={imgObject.imgSrc} alt={imgObject.imgAlt} />
      {/* <Buttons /> */}
    </div>
  );
};
