import React, { useState } from "react";
import AlbumName from "./AlbumName";
import ArtistName from "./ArtistName";
import CoverImage from "./CoverImage";
//import Icons from "./Icons";

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
            <button className="play-button"></button>
            <button className="heart-button"></button>
            <button className="dot-button"></button>
          </div>
        )}
      </div>
      <div className="album-name">
        <AlbumName
          name={albumData.name}
          externalUrl={albumData.external_urls}
        />
      </div>
      <div className="artists">
        {albumData.artists.map((artist, index) => (
          <React.Fragment key={artist.id}>
            <ArtistName name={artist.name} />
            {index < albumData.artists.length - 1 && <span>, </span>}
          </React.Fragment>
        ))}
      </div>
    </div>
  );
};

export default Album;
