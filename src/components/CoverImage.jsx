/* eslint-disable react/prop-types */

export const CoverImage = ({ images }) => {
  let imageUrl = images; 
  // debugger;
  return <img src={imageUrl} alt="Album Cover" className="coverImage" />;
}

