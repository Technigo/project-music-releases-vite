export const CoverImage = ({ image }) => {
    // Functional component that destructures the prop image, and sets it as the source of the image tag.
    return (
        <img src={image.url} alt="Album Cover"/>
      )
}