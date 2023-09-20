//import { AlbumName } from "./AlbumName";
//import { ArtistName } from "./AlbumName";
//import { AlbumImages } from "./AlbumImages";
//import { Header } from "./components/Header";

export const Album = ({ id, albumImages, name, albumType, artists }) => {
    return (
        <div className="album-info">

            <div>
                {/* <AlbumImages images={albumImages} /> */}
            </div>
            <p>
                <span>Album Name:</span> {name}
            </p>
            <p>
                <span>Album Type:</span> {albumType}
            </p>
            <p>
                <span>Artists:</span> { }
            </p>
            {/* Separation of child components */}

        </div>
    )
}

Album.defaultProps = {
    name: "No name information available",
    albumType: "No albumn type available",
};


