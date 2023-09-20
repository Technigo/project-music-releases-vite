import React from "react";
import "./index.css";

export const Album = ({ album, artists, images, externalUrl }) => {
    return (
        <div className="Album">

            <div className="container">
                <img className="AlbumImage"
                    src={images[0].url}
                    alt={`album cover for ${album}`} />

                <div className="middle">

                    <img src="./src/assets/icons/heartbtn.png" alt="" />
                    <img src="./src/assets/icons/playbtn.png" alt="" />
                    <img src="./src/assets/icons/dotsbtn.png" alt="" />

                </div>


            </div>

            <div className="AlbumInfo">
                <p className="AlbumName">
                    <a href={externalUrl} target="_blank" rel="noopener noreferrer">
                        {album}
                    </a>
                </p>
                <p className="ArtistName">
                    {artists.length > 0 ? (
                        artists.map((artist, index) => (
                            <span key={artist.id}>
                                <a
                                    href={artist.external_urls.spotify}
                                    target="_blank"
                                    rel="noopener noreferrer">
                                    {artist.name} </a>
                                {index < artists.length - 1 ? ", " : ""}
                            </span>
                        ))
                    ) : (
                        "No artist information available"
                    )}
                </p>
            </div>
        </div>
    );
};












