import playIcon from '../assets/icons/play.svg';
import heart from '../assets/icons/heart.svg';
import dots from '../assets/icons/dots.svg';

export const CoverImage = ({coverImage}) => {
  return (
    <div className="container-image">
      <img className="cover-image" src={coverImage} alt="Album Cover"/>
      <div className="buttons-image">
        <img src={heart} alt="Heart Icon" />
        <img id="heart" src={playIcon} alt="Play Icon" />
        <img src={dots} alt="Dots Icon" />
      </div>
    </div>
  )
}
