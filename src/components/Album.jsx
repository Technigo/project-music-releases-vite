import { AlbumName } from "./AlbumContent/AlbumName";

export const Album = ({
name
}) => {

    return (
        <div className="album">
            <div>
                <AlbumName name={name}/>
            </div>

        </div>
    )
}