import { Icons } from "../Icons"

export const CoverImage = ({album})  => {
    return (
        <div className="album-cover">
            <img src={album.images[0].url} alt="The album cover" />
            <Icons />
        </div>
        
    )
}