import React from "react";

const CoverImage = ({ images }) => {

    return (
        <div className="cover-image">
            <img src={images[0].url} alt="Album Cover" />
        </div>
    );
};

export default CoverImage; 