import { AlbumName } from "./AlbumName.jsx";
import { ArtistName } from "./ArtistName.jsx";
import { CoverImage } from "./CoverImage.jsx";

export const Album = (album) => {
    return (
        <div>
            <p>hello hello</p>
        <CoverImage cover={album.images} />
        <AlbumName name={album.name}/>
        <ArtistName artist={album.artists}/>
        </div>
    )
};