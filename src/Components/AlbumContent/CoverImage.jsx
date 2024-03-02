import { IconButton } from "../Buttons/IconButton";

export const CoverImage = ({coverImage}) => {
    return (
        <div className="album-cover-image">
            <img src={coverImage} className="album-cover" alt="album cover image"/>
            <IconButton/>
        </div>
    )
}