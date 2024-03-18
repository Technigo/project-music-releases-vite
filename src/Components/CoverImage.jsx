import { Icon } from "./Icon"
import Heart from "../assets/icons/heart.svg";
import Play from "../assets/icons/play.svg";
import Dots from "../assets/icons/dots.svg";

export const CoverImage = ({ imgSrc, albumName, albumUrl }) => {
 return (
    <div className="cover-image-container">
        <img className="cover-image" src={imgSrc} alt={albumName} />
            <div className="icon-container">
                <Icon icon={Heart} />
                  <a className="play-icon" href={albumUrl}>	        
                <Icon icon={Play} />
                  </a>
                <Icon icon={Dots} />
            </div>
        </div>
    );
};