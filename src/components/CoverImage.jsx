import playIcon from "../assets/icons/play.svg";
import heartIcon from "../assets/icons/heart.svg";

export const CoverImage = ({ imageUrl, url }) => {
  return (
    <>
      {/* React fragment (only 1 child can return per component) */}
      <div className="album-cover-container">
        <img src={imageUrl} alt="Album Cover" className="album-cover-image" />
      </div>
      <div className="overlay">
        <img className="favorite-icon" width={24} height={24} src={heartIcon} />
        <a href={url} className="play">
          <img className="play-icon" width={36} height={36} src={playIcon} />
        </a>
        <button className="more-info">...</button>
      </div>
    </>
  );
};
