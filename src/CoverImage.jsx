import PropTypes from "prop-types";
import heart from "./assets/icons/heart.svg";
import dots from "./assets/icons/dots.svg";
import play from "./assets/icons/play.svg";

export const CoverImage = ({src, albumUrl}) => {
  return (
    <div className="cover-img">
      <img src={src} alt=""  />
      <div className="hover">
        <div className="overlay"></div>
        <div className="icons">
          <img className="hover-heart" src={heart}/>
          <a href={albumUrl} alt="to album on spotify" target="_blank" rel="noreferrer"><img className="hover-play" src={play}/></a>
          <img className="hover-dots" src={dots}/>
        </div>
      </div>
      
    </div>
  )
};

CoverImage.propTypes = {
  src: PropTypes.string,
}