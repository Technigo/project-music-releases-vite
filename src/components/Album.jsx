import React, { useState } from "react";
import AlbumName from "./AlbumName";
import ArtistName from "./ArtistName";
import CoverImage from "./CoverImage";
import { PlayIcon, HeartIcon, DotIcon } from "../components/Icons";

const Album = ({ albumData }) => {
  const [isHovered, setIsHovered] = useState(false);

  // Define event handlers for mouse enter and leave
  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  return (
    <div
      className={`album ${isHovered ? "hovered" : ""}`}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div className="cover-image-container">
        <div className="cover-image">
          <CoverImage imageUrl={albumData.images[0].url} />
        </div>
        {isHovered && (
          <div className="buttons">
            <button type="button" className="play-icon">
              <PlayIcon />
            </button>
            <button type="button" className="heart-icon">
              <HeartIcon />
            </button>
            <button type="button" className="dot-icon">
              <DotIcon />
            </button>
          </div>
        )}
      </div>
      <div className="album-name">
        <AlbumName name={[albumData.name, albumData.external_urls.spotify]} />
      </div>
      <div className="artists">
        {albumData.artists.map((artist, index) => (
          <React.Fragment key={artist.id}>
            <ArtistName name={[artist.name, artist.external_urls.spotify]} />
            {index < albumData.artists.length - 1 && <span>&nbsp;&amp; </span>}
          </React.Fragment>
        ))}
      </div>
    </div>
  );
};

export default Album;
