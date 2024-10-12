import React from "react";
import './AlbumCover.css';
import dotsIcon from "../assets/icons/dots.svg";
import heartIcon from "../assets/icons/heart.svg";
import playIcon from "../assets/icons/play.svg";


export const AlbumCover = ({ imageUrl, alt }) => {
    return (
        <div className="cover-container ">
            <img className="album-cover" src={imageUrl} alt={alt} />
            <div className="overlay"></div>
            <div className="icons">
                <img className="icon-small" src={heartIcon} alt="heart-icon" />
                <img className="icon-big" src={playIcon} alt="play-icon" />
                <img className="icon-small" src={dotsIcon} alt="dots-icon" />
            </div>
        </div>
    );
};