import React from "react";
import ArtistName from "./Components/ArtistName/ArtistName";
import AlbumName from "./Components/AlbumName/AlbumName";
import CoverImage from "./Components/CoverImage/CoverImage";
import Header from "./Components/Header/Header";
import data from "./data.json"; //im really not sure where i need to add data.json

//{album.images[0].url} change [0] if i want another image that is different size
//explanation (use of map) privateNote-1:
const Album = ({ data }) => {
    return (
        <section className="album-wrapper">
            <Header />
            {data.map((album, index) => (
                <div key={index}>
                    <div>
                        <CoverImage url={album.images[1].url} alt={album.name} />
                    </div>
                    <br />
                    <div>
                        <strong>Album Name:</strong> <AlbumName name={album.name} /></div>
                    <br />
                    <div>
                        <strong>Artist Name:</strong> <ArtistName name={album.artists[0].name} />
                    </div>
                </div>
            ))}
        </section>
    );
};
//changed from ul and li to section and div. not sure whats best. Might need to add more than one artist later. 
export default Album;




//why album.jsx   - data.json - JSON file containing 1 key called `"albums"` containing keys mimiquing a Spotify API object endpoint.

//PREVIOUS COMMENT First I passed everything from the parent. I think I managed to change it, and its now passed trough the child componants. 