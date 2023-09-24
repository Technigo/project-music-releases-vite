/* eslint-disable react/prop-types */

import { AlbumName } from "./AlbumName"
import { ArtistName } from "./ArtistName"
import { CoverImage } from "./CoverImage"

import "./album.css"

export const Album = ({album}) => {

    //Sets all elements of the album as variables to be sent as props. ArtistNames and artistURLs are arrays as some albums have multiple artists
    let albumName = album.name
    let albumURL = album.external_urls.spotify
    let artistNames = album.artists.map((artist) => (artist.name))
    let artistURL = album.artists.map((artist) => (artist.external_urls.spotify))
    let imageURL = album.images[0].url

    return (
        <>
            <div className="anAlbum">
                <CoverImage imageURL={imageURL} />
                <AlbumName name={albumName} albumURL={albumURL} />
                <ArtistName name={artistNames} artistURL={artistURL} />
            </div>
        </>
    )
}