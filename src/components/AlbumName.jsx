import React from "react";

// eslint-disable-next-line react/prop-types
const AlbumName = ({ name }) => (
  <a
    href={name[1]}
    target="_blank"
    rel="noopener noreferrer"
    className="albumName"
    style={{ cursor: "pointer", color: "inherit", textDecoration: "none" }}>
    <h2>{name[0]}</h2>
  </a>
);

export default AlbumName;
