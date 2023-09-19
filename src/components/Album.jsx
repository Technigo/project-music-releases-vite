import { AlbumName } from "./AlbumName.jsx";
import { ArtistName } from "./ArtistName.jsx";
import { CoverImage } from "./CoverImage.jsx";

// Functional component that destructures image, name and artist to the component props image, album and artist.
export const Album = ({ album }) => {
    const { name, artists, images } = album;

    return ( // I'm using the React fragment here to get rid of some of the divs from the HTML structure.
        <>
            <CoverImage image={images[0]} />
            <AlbumName name={name} /> 
            <ArtistName artists={artists}/>
        </>
    );
}