/* eslint-disable react/prop-types */

import "./AlbumName.css"

export const AlbumName = ({ name, albumUrl }) => {
  return (
    <p className="albumName">
      <span></span>
      <a href={albumUrl}>{name}</a>
    </p>
  );
};