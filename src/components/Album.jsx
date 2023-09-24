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
        <CoverImage imageUrl={albumData.images[0].url} />
        {isHovered && (
          <div className="buttons">
            <button className="play-icon">
              <PlayIcon />
            </button>
            <button className="heart-icon">
              <HeartIcon />
            </button>
            <button className="dot-icon">
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
            <ArtistName name={[artist.name]} />
            {/* name={[artist[0].external_urls.spotify]} ------tried with this as path, dosen't work */}
            {index < albumData.artists.length - 1 && <span>, </span>}
            {/* the comma is in it's own line and the artists are in seperate lines - this is wrong */}
          </React.Fragment>
        ))}
      </div>
    </div>
  );
};

export default Album;
