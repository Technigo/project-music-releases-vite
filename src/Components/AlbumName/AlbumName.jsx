import React from "react";
import styling from './AlbumName.module.css';

const AlbumName = ({ name }) => {
    return (<span className={styling.AlbumName}>{name}</span>
    );
};

export default AlbumName;


