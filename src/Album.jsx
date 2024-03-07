import React from "react";
import ArtistName from "./Album component/ArtistName";
import CoverImage from "./Album component/CoverImage";

const Album =({album}) => {
    return (
      <div>
        <CoverImage image={album.images[0].url} />
        <h2>{album.name}</h2>
        <ArtistName artists={album.artists} />
      </div>
    );
}

export default Album