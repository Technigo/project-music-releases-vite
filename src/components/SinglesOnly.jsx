import { SingleArtist } from "./SinglesOnly ChildComponents/SingleArtist";
import { SingleCoverImage } from "./SinglesOnly ChildComponents/SingleCoverImage";
import { SingleName } from "./SinglesOnly ChildComponents/SingleName";


export const SinglesOnly = ({name, album_type, albumUrl, images, artists}) => {
    
    return (
        <div className="singles">
            <SingleCoverImage  images={images} albumUrl={albumUrl} album_type={album_type}/>
            <SingleName name={name} album_type={album_type}/>
            <SingleArtist artists={artists} />
             
        </div>
       
    );
};

SinglesOnly.defaultProps = {
    name: "Album is missing",
    artists: "Artist is missing",
    images: "Cover image is missing",
};

//<CoverImage images={images} albumUrl={albumUrl} /> 
