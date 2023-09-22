import React from "react";
import styling from './CoverImage.module.css';

const CoverImage = ({ url, alt }) => {
    return (
        <span className={styling.CoverImage}>
            <img src={url} alt={alt} /></span>
    );
};

export default CoverImage;

