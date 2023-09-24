import { AlbumName } from "./AlbumName.jsx";
import { ArtistName } from "./ArtistName.jsx";
import { CoverImage } from "./CoverImage.jsx";
import "./Album.css";

export const Album = ({ albumName, albumLink, artistName, artistLink, cover }) => {
    return (
        <div className="album-card">
            <CoverImage cover={cover} />
            <AlbumName albumName={albumName} albumLink={albumLink} />
            <ArtistName artistName={artistName} artistLink={artistLink} />
        </div>
    )
};