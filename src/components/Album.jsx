/* eslint-disable react/prop-types */
import React, { useState } from "react";
import AlbumName from "./AlbumName";
import ArtistName from "./ArtistName";
import CoverImage from "./CoverImage";
//import { ReactComponent as PlayIcon } from "../assets/icons/play.svg";
//import { ReactComponent as HeartIcon } from "../assets/icons/heart.svg";
//import { ReactComponent as DotIcon } from "../assets/icons/dots.svg";
import playIcon from "../assets/icons/play.svg";
import heartIcon from "../assets/icons/heart.svg";
import dotIcon from "../assets/icons/dots.svg";

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
      onMouseLeave={handleMouseLeave}>
      <div className="cover-image-container">
        <div className="cover-image">
          <CoverImage imageUrl={albumData.images[0].url} />
        </div>
      </div>
      {isHovered && (
        <div className="buttons">
          <button type="button" className="play-icon">
            <img src={playIcon} alt="Play" />
          </button>
          <button type="button" className="heart-icon">
            <img src={heartIcon} alt="Heart" />
          </button>
          <button type="button" className="dot-icon">
            <img src={dotIcon} alt="Dot" />
          </button>
        </div>
      )}
      <div className="album-info">
        <div className="album-name">
          <AlbumName name={[albumData.name, albumData.external_urls.spotify]} />
        </div>
        <div className="artists">
          {albumData.artists.map((artist, index) => (
            <React.Fragment key={artist.id}>
              <ArtistName name={[artist.name, artist.external_urls.spotify]} />
              {index < albumData.artists.length - 1 && (
                <span>&nbsp;&amp; </span>
              )}
            </React.Fragment>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Album;
