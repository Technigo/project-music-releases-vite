/* eslint-disable react/prop-types */

export const CoverImage = ({ images }) => {
  let imageUrl = images; 

  return <img src={imageUrl} alt="Album Cover" className="coverImage" />;
}

