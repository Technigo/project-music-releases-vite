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
            <AlbumName albumName={albumData.name} albumLink={albumData.external_urls.spotify} />
            {artistDatas.map ((name,external_url)=>(
                <ArtistName key = {artistDatas.id} artistName={name} artistLink={external_url} />
            ))}
        </div>

    )
}
//key = {albumData.images} for images?