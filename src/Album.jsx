
import Header from "./Components/Header/Header";
import React from "react";
import ArtistName from "./Components/ArtistName/ArtistName";
import AlbumName from "./Components/AlbumName/AlbumName";
import CoverImage from "./Components/CoverImage/CoverImage";

const Album = ({ data }) => {
    return (
        <div>
            <Header />
            <section className="album-wrapper">
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


//Artist name wrapped in span instead of div. this keeps them on the same line


//{album.images[0].url} change [0] if i want another image that is different size
//album.name: I think it will read out loud the actual name of the album f.eks with screen readers. 
//explanation (use of map) privateNote-1:





//changed: <AlbumName name={album.name} /
//rel="noopener noreferrer"> safety reasons as i understand it? target blank: new window
//changed from ul and li to section and div. not sure whats best. Might need to add more than one artist later. 




//why album.jsx   - data.json - JSON file containing 1 key called `"albums"` containing keys mimiquing a Spotify API object endpoint.

//PREVIOUS COMMENT First I passed everything from the parent. I think I managed to change it, and its now passed trough the child componants. 