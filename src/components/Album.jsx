/* eslint-disable react/prop-types */

import { AlbumName } from "./AlbumName"
import { ArtistName } from "./ArtistName"
import { CoverImage } from "./CoverImage"

export const Album = (props) => {

    let albumName = props.album.name
    let artistName = props.album.artists[0].name
    let imageArray = props.album.images

    return (
        <>
            <div className="anAlbum">
                <CoverImage infoArray={imageArray} />
                <AlbumName name={albumName} />
                <ArtistName name={artistName} />
            </div>
        </>
    )
}