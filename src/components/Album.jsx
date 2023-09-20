//import { AlbumName } from "./components/AlbumName"
//import { ArtistName } from "./components/AlbumName"
//import { CoverImage } from "./components/CoverImage"
//import { Header } from "./components/Header"

export const Album = ({ id, images, name, albumType, artists }) => {
    return (
        <div className="album-info">
            <div>
                <span>Cover Image:</span> {images}
            </div>
            <p>
                <span>Album Name:</span> {name}
            </p>
            <p>
                <span>Album Type:</span> {albumType}
            </p>
            <p>
                <span>Albumn ID:</span> {id}
            </p>
            {/* Separation of child components */}




            Album</div>
    )
}


