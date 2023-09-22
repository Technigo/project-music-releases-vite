

export const CoverImage = ({ image }) => {
    // Functional component that destructures the prop image, and sets it as the source of the image tag.
    return (
      <div className="cover-container">
        <img className="cover-image" src={image.url} alt="Album Cover"/>
        <div className="icon-container hidden">
          <img id="favorite-icon" src="./icons/heart.svg" alt="Favorite Icon" />
          <img src="../../../../public/icons/heart.svg" alt="" />
          <img id="play-icon" src="./icons/play.svg" alt="Play Icon" />
          <img id="more-info-icon" src="./icons/dots.svg" alt="More Info Icon" />
        </div>
      </div>
      )
}
