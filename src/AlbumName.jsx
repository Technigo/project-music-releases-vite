import React from "react";
import data from "./data.json";
import "./index.css";


export const AlbumName = () => {
    const albums = data.albums.items;
    return (
        <div className="Album">
            {albums.map((album) => (
                <div key={album.id}>

                    <img
                        src={album.images[0].url} // Display the first image for each album
                        alt={`album cover for ${album.name}`}
                    />

                    <h2><a href={album.external_urls.spotify} target="_blank" rel="noopener noreferrer">
                        {album.name}
                    </a></h2>
                    <p><a href={album.artists[0].external_urls.spotify} target="_blank" rel="noopener noreferrer">
                        {album.artists[0].name}
                    </a></p>

                </div>
            ))}
        </div>
    );
};





