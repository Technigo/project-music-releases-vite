import { AlbumName } from "./AlbumName"
import { CoverImage } from "./CoverImage"

export const PlaylistAside = ({ playlistInfo }) => {

    //Sets variables of data that will be sent as props to the CoverImage and AlbumName-components
    let playlistName = playlistInfo.name
    let playlistURL = playlistInfo.external_urls.spotify
    let playlistImage = playlistInfo.images[0].url

    return (
        <>
            <div className="aPlaylist">
                <CoverImage imageURL={playlistImage} />
                <AlbumName name={playlistName} albumURL={playlistURL} />
            </div>
        </>
    )
}