

export const CoverImage = ({ imageUrl }) => {
   // console.log('Image Url:', imageUrl);
  return (
    <div className="coverImageWrapper">
  <img className="coverImage" src={imageUrl} alt="Album cover" />
  </div>
  );
};
