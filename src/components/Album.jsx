import { AlbumName } from "./child components/AlbumName";
import { ArtistName } from "./child components/ArtistName";
import { CoverImage } from "./child components/CoverImage";
import { Header } from "./child components/Header";

export const Album = ({name, artists, images, header}) => {
    
    return (
        <div className="album">
            <CoverImage images={images} /> 
            <AlbumName name={name} />
            <ArtistName artists={artists} />  
        </div>
    );
};

Album.defaultProps = {
    name: "Album is missing",
    artists: "Artist is missing",
    images: "Cover image is missing",
};