import { Icons } from "../Icons";
import "./AlbumCover.css";

export const AlbumCover = ({album})  => {
    return (
        <div className="album-cover">
            <img src={album.images[0].url} alt="The album cover" />
            <Icons />
        </div>   
    );
}