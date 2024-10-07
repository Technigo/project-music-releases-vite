/* eslint-disable react/prop-types */
import React from "react";

const ArtistName = ({ name }) => (
  <a
    href={name[1]}
    target="_blank"
    rel="noopener noreferrer"
    className="artistName"
    style={{ cursor: "pointer", color: "inherit", textDecoration: "none" }}>
    <h3>{name[0]}</h3>
  </a>
);

export default ArtistName;
