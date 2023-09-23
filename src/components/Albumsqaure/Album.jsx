import React from "react";
import CoverImage from "./CoverImage";
import AlbumName from "./AlbumName";
import ArtistName from "./ArtistName";

export const Album = ({ name, artists, images, albumURL }) => {
    return (
        <div className="Album">
            <CoverImage imageUrl={images[0].url} altText={`album cover for ${name}`} />
            <AlbumName name={name} albumURL={albumURL} />
            <ArtistName artists={artists} />
        </div>
    );
};

export default Album;

