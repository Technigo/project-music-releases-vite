import "./CoverImage.css";

export const CoverImage = ({ imageRefProp }) => {
  let imageRef = `cover Image for the album - ${imageRefProp.altText}`;

  return (
    <>
      <div className="cover-image-wrapper">
        <img src={imageRefProp.urlLinkFromApi} alt={imageRef} />
      </div>
    </>
  );
};
