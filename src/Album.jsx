// Album.jsx
import React from "react";
import CoverImage from "./CoverImage";
import AlbumInfo from "./AlbumInfo";
import ArtistName from "./ArtistName";

const Album = ({ album, artists, images, externalUrl }) => {
    return (
        <div className="Album">
            <CoverImage imageUrl={images[0].url} altText={`album cover for ${album}`} />
            <AlbumInfo album={album} externalUrl={externalUrl} />
            <ArtistName artists={artists} />
        </div>
    );
};

export default Album;
