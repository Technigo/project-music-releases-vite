import heartIcon from './assets/icons/heart.svg'
import playIcon from './assets/icons/play.svg'
import dotsIcon from './assets/icons/dots.svg'
export const CoverImage = ({ image, alt }) => {
  return (
    <div>
      <img src={image} alt={alt} />
      <div className="icons">
        <img src={heartIcon} alt="heart-icon" />
        <img src={playIcon} alt="play-icon" />
        <img src={dotsIcon} alt="dots-icon" />
      </div>
    </div>
  )
}
