import { AlbumName } from "./AlbumName.jsx";
import { ArtistName } from "./ArtistName.jsx";
import { CoverImage } from "./CoverImage.jsx";

export const Album = ({ name, artist, cover }) => {
    return (
        <div className="album-card">
            <CoverImage cover={cover} />
            <AlbumName name={name} />
            <ArtistName artist={artist} />
        </div>
    )
};