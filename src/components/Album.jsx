//Imports
import { AlbumName } from "./AlbumName.jsx";
import { ArtistName } from "./ArtistName.jsx";
import { CoverImage } from "./CoverImage.jsx";


//Export 
export const Album = ({ album }) => { //Defining album component
    console.log(album)
    const { name, external_urls, artists, images } = album; //Destructuring

    //Rendering JSX. Creating structure of how the album information should be displayed/order.
    return (
        <div className="album-all">
            <CoverImage image={images[0]} />
            <AlbumName name={name} albumURL={external_urls.spotify} />
            <ArtistName artists={artists} />
        </div>
    );
}
