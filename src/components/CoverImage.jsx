/* eslint-disable react/prop-types */
import { IconsButtons } from "./IconsButtons";
export const CoverImage = ({ images }) => {
  let imageUrl = images; 

  return (
    <>
      <div className="cover-container">
      <img src={imageUrl} alt="Album Cover" className="coverImage" />
      <IconsButtons />
      </div>
  </>
  )
}

