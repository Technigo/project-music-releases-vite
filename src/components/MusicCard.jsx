import { AlbumCover } from "./music_card/AlbumCover.jsx";
import { AlbumInfo } from "./music_card/AlbumInfo.jsx";

// Parent component
export const MusicCard = ({ imageUrl, albumName, artistName, externalUrl }) => {
    return (
        <div className="musicCard">
            <AlbumCover imageUrl={imageUrl} altText ={albumName} />
            <AlbumInfo albumName={albumName} artistName={artistName} externalUrl={externalUrl}/>
        </div >
    );
};

// This is a feature in React that allows me to specify default values for props in case they are not provided or are passed as undefined.
MusicCard.defaultProps = {

};