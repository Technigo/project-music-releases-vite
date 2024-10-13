// src/components/AlbumCover.jsx

import React, { useState } from 'react';
// Importing our icon SVGs
import heartIcon from '../assets/icons/heart.svg';
import playIcon from '../assets/icons/play.svg';
import dotsIcon from '../assets/icons/dots.svg';

export const AlbumCover = ({ album }) => {
    
     // This line creates a state to track whether the album is being hovered
     const [isHovered, setIsHovered] = useState(false);


    return (
        <div className="album-cover"

            // Added onMouseEnter and onMouseLeave to handle hover state
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            >
            {/* This is a container for our album image and the overlay with icons */}
            <div className="image-container">
            
            {/* This shows the album cover image */}
            <img src={album.images[0].url} alt={album.name} className="album-image" />
            
            {/* If the album is being hovered, we show the overlay with icons */}
            {isHovered && (
                <div className="overlay">
                    <img src={heartIcon} alt="Like" className="icon heart-icon" />
                    <img src={playIcon} alt="Play" className="icon play-icon" />
                    <img src={dotsIcon} alt="More" className="icon dots-icon" />
                </div>
                )}
            </div>
        </div>
    )
}