import { CoverImage } from "./album-child-component/CoverImage"
import { AlbumName } from "./album-child-component/AlbumName"
import { ArtistName } from "./album-child-component/ArtistName"

export const Album = ({ name, artists, imageUrl, albumHttpLink }) => {
    return (
        <>

            <div>
                <CoverImage url={imageUrl} />
                <AlbumName name={name} httplink={albumHttpLink} />
                <ArtistName artists={artists} />
            </div>
        </>
    )
}
