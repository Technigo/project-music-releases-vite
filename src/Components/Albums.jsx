import { CoverImage } from "./AlbumInfo/CoverImage"
import { Icons } from "./Icons" 
import { AlbumName } from "./AlbumInfo/AlbumName"
import { ArtistName } from "./AlbumInfo/ArtistName"


export const Albums = (data) => {
    const { coverImage, albumName, albumURL, artistName, artistURL } = album;
    data.
    return (
        <div className="site-wrapper">
            <div className="albumCover">
                <img src={coverImage} />
                <Icons />
            </div>
            <a href={albumURL}>
                <p>
                    <span>{albumName}</span>
                </p>
            </a>
            <a href={artistURL}>
                <p>
                    <span>{artistName}</span>
                </p>
            </a>
        </div> 
    );
}