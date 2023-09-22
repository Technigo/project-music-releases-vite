import { IconButtons } from "./IconButtons/IconButtons"

export const CoverImage = ({ image }) => {
    // Functional component that destructures the prop image, and sets it as the source of the image tag.
    return (
      <div className="cover-container">
        <img className="cover-image" src={image.url} alt="Album Cover"/>
        <IconButtons />
      </div>
      )
}
