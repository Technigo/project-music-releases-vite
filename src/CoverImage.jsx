/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from 'react';

const CoverImage = ({ coverUrl }) => {
  return (
    <div className="cover-image">
        <img src={coverUrl} alt="Album Cover" />
    </div>
  );
};

export default CoverImage;
