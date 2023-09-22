import React from "react";
import styling from './ArtistName.module.css';

const ArtistName = ({ name }) => {
    return (<span className={styling.ArtistName}>{name}</span>
    );
};

export default ArtistName;

