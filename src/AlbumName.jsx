/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React from 'react';

const AlbumName = ({ title, externalUrl }) => {
  return (
    <h3 className="album-name">
      <a href={externalUrl} target="_blank" rel="noopener noreferrer">
        {title}
      </a>
    </h3>
  );
};

export default AlbumName;
