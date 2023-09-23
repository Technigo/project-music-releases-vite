import { AlbumCover } from "./AlbumCover.jsx";
import { AlbumName } from "./AlbumName.jsx";
import { ArtistName } from "./ArtistName.jsx";

// Parent component
export const AlbumCard= ({ imageUrl, albumName, artistName, externalUrl }) => {
    return (
        <div className="albumCard">
            <AlbumCover imageUrl={imageUrl} altText ={albumName} />
            <AlbumName albumName={albumName} externalUrl={externalUrl} />
            <ArtistName artistName={artistName} externalUrl={externalUrl} />
        </div >
    );
};

// This is a feature in React that allows me to specify default values for props in case they are not provided or are passed as undefined.
AlbumCard.defaultProps = {

};