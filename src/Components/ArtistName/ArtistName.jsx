import React from "react";
import styling from './ArtistName.module.css';

const ArtistName = ({ name, index, totalArtists }) => {
    const generateDelimiter = (index, length) => {
        if (index < length - 1) {
            return " & ";
        }
        return "";
    };

    return (
        <span className={styling.ArtistName}>
            {name}
            {generateDelimiter(index, totalArtists)}
        </span>
    );
};

export default ArtistName;

