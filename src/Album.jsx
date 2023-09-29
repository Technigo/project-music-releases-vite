import { AlbumName } from "./Components/AlbumName/AlbumName";   // import AlbumName component
import { ArtistName } from "./Components/ArtistName/ArtistName"; // import ArtistName component
import { CoverImage } from "./Components/CoverImage/CoverImage"; // import CoverImage component

import index from "./index.css"; // import index.css file

export const Album = (props) => {
    console.log(props);
    const { album } = props;
    console.log(album);
    
    return (
        <div className="album">
        <CoverImage />
        <ArtistName />
        <AlbumName />
        </div>
    );
    };

// export default Album; // export Album function