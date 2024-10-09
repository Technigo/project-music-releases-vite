import React from 'react';

const AlbumName = ({ albumName, externalUrl }) => {
  return (
    <div className="album-name">
 <h2 className="album-title">
  <a
    href={externalUrl}
    target="_blank"
    rel="noopener noreferrer"
    className="header-link"
  >
    {albumName}
  </a>
</h2>
    </div>
  );
};

export default AlbumName;