export const CoverImage = ({ images, imageAlt }) => {
  // Image height 300
  const imgUrl = images[1].url;
  return (
    <div className="coverImage">
      <img src={imgUrl} alt={imageAlt} />
    </div>
  );
};
