import React from 'react';

const CoverImage = ({ images }) => {
  // Assuming you have different image sizes (e.g., images[0] for a small size)
  return (
    <div className="cover-image">
      <img src={images[0].url} alt="Album Cover" />
    </div>
  );
};

export default CoverImage;