import React from "react";
import "./index.css";

export const Album = ({ album, artists, images, externalUrl }) => {
    return (
        <div className="Album">
            <img
                src={images[0].url}
                alt={`album cover for ${album}`}
                className="AlbumImage"
            />
            <div className="AlbumInfo">
                <p className="AlbumName">
                    <a href={externalUrl} target="_blank" rel="noopener noreferrer">
                        {album}
                    </a>
                </p>

                <p className="ArtistName">
                    {artists && artists.length > 0 ? (
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












