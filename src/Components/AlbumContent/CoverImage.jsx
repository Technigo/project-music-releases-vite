import { IconButton } from "../Buttons/IconButton";

export const CoverImage = ({coverImage}) => {
    return (
        <div className="albumcover-wrapper">
            <img src={coverImage} className="album-cover" alt="album cover image"/>
            <IconButton/>
        </div>
    )
}