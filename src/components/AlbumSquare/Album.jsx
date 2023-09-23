import React from "react";
import CoverImage from "./CoverImage";
import AlbumName from "./AlbumName";
import ArtistName from "./ArtistName";
import "./albumsquare.css"

// Define the Album component as a functional component with props.
export const Album = ({ name, artists, images, albumURL }) => {
    return (
        //container with album information, rendering the following components with props for image, album name, album url and artists names.
        <div className="Album">
            <CoverImage imageUrl={images[0].url} altText={`album cover for ${name}`} />
            <AlbumName name={name} albumURL={albumURL} />
            <ArtistName artists={artists} />
        </div>
    );
};

export default Album;

