import { Icons } from "../Icons"

export const CoverImage = (album)  => {
    return (
        <div className="albumCover">
            <img src={album.images[1].url} alt="The album cover" />
            <Icons />
        </div>
        
    )
}