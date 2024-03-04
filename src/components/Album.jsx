//import
// import { ArtistName } from "./ArtistName";
// import { CoverImage } from "./CoverImage";

import { AlbumName } from "./AlbumName"
import { ArtistName } from "./ArtistName";
import { CoverImage } from "./CoverImage"

export const Album =({albumData}) =>{
    const artistDatas = albumData.artists;
    return (
        <div>
            <CoverImage coverImage={albumData.images[1].url} /> 
            <AlbumName albumName={albumData.name} />
            {artistDatas.map ((name,external_url,index)=>(
                <ArtistName key = {index} artistName={name} artistLink={external_url} />
            ))}
        </div>

    )
}
//key = {albumData.images} for images?