import heartLogo from "../../assets/icons/heart.svg";
import playLogo from "../../assets/icons/play.svg";
import dotsLogo from "../../assets/icons/dots.svg";
// import "./CoverImage.css";

const CoverImage = ({ albumName, url }) => {
  return (
    <div className="coverImageWrapper">
      <img className="coverImage" src={url} alt={albumName} />
      <span className="iconWrapper">
        <button type="button" className="heartIcon">
          <img src={heartLogo} color="white" />
        </button>
        <button type="button" className="playIcon">
          <img src={playLogo} />
        </button>
        <button type="button" className="dotsIcon">
          <img src={dotsLogo} />
        </button>
      </span>
    </div>
  );
};

export default CoverImage;
