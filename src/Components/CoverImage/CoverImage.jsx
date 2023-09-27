import React from "react";
import styling from './CoverImage.module.css';

const CoverImage = ({ url, alt }) => {
    return (
        <span className={styling.CoverImage}>
            <img src={url} alt={alt} />
            <div className={styling.coverIcons}>
                <img className={`${styling.iconHeart} ${styling.icon}`} src="/icons/heart.svg" alt="Heart button" />
                <img className={`${styling.iconPlay} ${styling.icon}`} src="/icons/play.svg" alt="Play button" />
                <img className={`${styling.iconDots} ${styling.icon}`} src="/icons/dots.svg" alt="Dots button" />
            </div>
        </span>
    );
};

export default CoverImage;
