import { AlbumName } from "./AlbumName";
import { ArtistName } from "./ArtistName";
import { CoverImage } from "./CoverImage";

export const Album = ({albumName, imgSrc, artists}) => {
    return (
        <div className="album-card">
            <div className="album-container">
                <CoverImage imgSrc={imgSrc}/>
                <AlbumName albumName={albumName} />
                <ArtistName artists={artists}/>
            </div>
        </div>
    )
}