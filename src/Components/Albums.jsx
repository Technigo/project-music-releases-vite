import { CoverImage } from "./CoverImage"
import { AlbumName } from "./AlbumName"
import { ArtistName } from "./ArtistName"

export const Albums = (data) => {
    const { coverImage, albumName, artistName } = album;
    return (
        <div>
            <CoverImage coverImage={coverImage} />
            <p><AlbumName albumName={albumName} /></p>
            <p><ArtistName artistName ={artistName} /></p>
        </div>
    )
}