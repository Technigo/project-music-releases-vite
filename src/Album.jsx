import React from "react";
import ArtistName from "./Components/ArtistName/ArtistName";
import AlbumName from "./Components/AlbumName/AlbumName";
import CoverImage from "./Components/CoverImage/CoverImage";
//import { Header } from "./Components/Header/Header";

export const Album = (data) => {
    const albums = data.data;

    return (
        <main>
            <h2>Albums</h2>
            <div className="albums_wrapper">
                {albums.map((album) => (
                    <div key={album.id} className="album">
                        <div> <p>artist: <ArtistName name={album.artists[0].name} /></p></div>
                        <div><p>album: <AlbumName name={album.name} /></p> </div>
                        <CoverImage url={album.images[0].url} alt={album.name} />
                    </div>
                ))}
            </div>
        </main>
    );
};
