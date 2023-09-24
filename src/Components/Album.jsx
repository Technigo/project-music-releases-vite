import React from "react";
import { Albums } from "../App";
//import { ArtistName } from "./ArtistName";
//import { CoverImage } from "./CoverImage";

//Extract album information
export const extractedAlbums = Albums.map((album) => {

    const ArtistName = album.artists[0].name;
    const albumName = album.name;
    const coverImage = album.images[0].url;

    return {
        ArtistName,
        albumName,
        coverImage,

    };

});
//export const extractedAlbums() => {

//}

/*export const Album = ({ album }) => { //Defining a functional React component, using album as prop (object containing information about an album)
    console.log(album)
    const { name, external_urls, artists, images } = album; //Destructuring

    //Rendering JSX. Creating structure of how the album information should be displayed/order.
    return (
        <div className="album-all">
            <CoverImage image={images[0]} />
            <AlbumName name={name} albumURL={external_urls.spotify} />
            <ArtistName artists={artists} />
        </div>
    );
}*/
