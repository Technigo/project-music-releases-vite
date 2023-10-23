import { CoverImage } from "./album-child-component/CoverImage"
import { AlbumName } from "./album-child-component/AlbumName"
import { ArtistName } from "./album-child-component/ArtistName"

// import "../../index.css"

export const Album = ({ name, artists, imageUrl, albumHttpLink }) => {
    return (

        <div className="album">
            <CoverImage url={imageUrl} />
            <AlbumName
                name={name}
                httplink={albumHttpLink} />
            <ArtistName artists={artists} />
        </div>

    )
}
