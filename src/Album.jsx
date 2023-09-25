import Header from "./Components/Header/Header";
import React from "react";
import ArtistName from "./Components/ArtistName/ArtistName";
import AlbumName from "./Components/AlbumName/AlbumName";
import CoverImage from "./Components/CoverImage/CoverImage";

const Album = ({ data }) => {
    console.log("Inside Album component");

    return (
        <div>
            <Header />
            <section className="albumWrapper">
                {data.map((album, index) => (
                    <div key={index}>
                        <div>
                            <div>
                                <CoverImage url={album.images[1].url} alt={album.name} />
                            </div>
                            <div>
                                <a href={album.external_urls.spotify} target="_blank" rel="noopener noreferrer">
                                    <AlbumName name={album.name} />
                                </a>
                            </div>
                            <h2>{album.album}</h2>
                            {album.artists.map((artist, artistIndex) => (
                                <span key={artistIndex}>
                                    <a
                                        href={artist.external_urls.spotify}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        <ArtistName
                                            name={artist.name}
                                            index={artistIndex}
                                            totalArtists={album.artists.length}
                                        />
                                    </a>
                                </span>
                            ))}
                        </div>
                    </div>
                ))}
            </section>
        </div>
    );
};

export default Album;

