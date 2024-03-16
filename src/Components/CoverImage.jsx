import heart from "../assets/heart.svg";
import secondplay from "../assets/play.svg";
import dots from "../assets/dots.svg";

// The cover image of each album.
export const CoverImage = ({ imageUrl }) => {
  return (
    <div className="coverImageWrapper">
      <img className="coverImage" src={imageUrl} alt="Album cover" />

      <div className="iconGroup">
        <img src={heart} alt="Heart Icon" className="icon" />
        <img src={secondplay} alt="Play Icon" className="icon play-icon" />
        <img src={dots} alt="Dots Icon" className="icon" />
      </div>
    </div>
  );
};
