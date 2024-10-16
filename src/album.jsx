/* eslint-disable react/prop-types */
import React from "react";
import ArtistName from "./ArtistName";
import "./index.css";
import dotsIcon from "./assets/icons/dots.svg";
import heartIcon from "./assets/icons/heart.svg";
import playIcon from "./assets/icons/play.svg";

const Album = ({ album }) => {
    const { name, images, artists, external_urls } = album;

    const albumCover = images && images.length > 0 ? images[0].url : "";

    console.log(album);

    return (
        <div className="cover-container"> {/* Wrap everything in cover-container */}
            <img className="album-cover" src={albumCover} alt={`${name} cover`} />

            <div className="overlay"></div>
            <div className="icons">
                <img className="icon-small" src={heartIcon} alt="heart-icon" />
                {external_urls && external_urls.spotify && (
                    <a href={external_urls.spotify} target="_blank" rel="noopener noreferrer">
                        <img className="icon-big" src={playIcon} alt="play-icon" />
                    </a>
                )}
                <img className="icon-small" src={dotsIcon} alt="dots-icon" />
            </div>

            <h2>
                {external_urls && external_urls.spotify && (
                    <>
                        {console.log("Album URL: ", external_urls.spotify)}
                        <a className="album-link" href={external_urls.spotify} target="_blank" rel="noopener noreferrer">
                            {name}
                        </a>
                    </>
                )}
            </h2>

            <h3> <ArtistName artists={artists} /></h3>

        </div>
    );
};

export default Album;
