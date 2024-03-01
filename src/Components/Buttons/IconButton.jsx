import Heart from "../../assets/icons/heart.svg";
import Play from "../../assets/icons/play.svg";
import Dots from "../../assets/icons/dots.svg";
import "./iconbutton.css";

export const IconButton = () => {
    return (
        <span className="icon-container">
            <button type="button" className="icon-button heart-icon">
                <img src={Heart} className="icon-heart" alt="heart icon"/>
            </button>
            <button type="button" className="icon-button play-icon">
                <img src={Play} className="icon-play" alt="play icon"/>
            </button>
            <button type="button" className="icon-button dots-icon">
                <img src={Dots} className="icon-dots" alt="dots icon"/>
            </button>
        </span>
    );
};