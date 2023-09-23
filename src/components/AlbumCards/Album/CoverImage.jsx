import { IconButtons } from "./IconButtons/IconButtons"

export const CoverImage = ({ image, albumUrl }) => {
    // Functional component that destructures the prop image, and sets it as the source of the image tag.
    return (
      <div className="cover-container">
        <a href={albumUrl.spotify}><img className="cover-image" src={image.url} alt="Album Cover"/></a>
        <IconButtons />
      </div>
      )
}
