import { IconButtons } from "./IconButtons/IconButtons"

export const CoverImage = ({ image, albumUrl }) => {
    // Functional component that destructures the prop image, and sets it as the source of the image tag.
    // Iconbuttons are added in, the styling for making them appear on hover is found under album-card.css
    return (
      <div className="cover-container">
        <a href={albumUrl.spotify}><img className="cover-image" src={image.url} alt="Album Cover"/></a>
        <IconButtons />
      </div>
      )
}
