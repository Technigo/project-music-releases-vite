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
            {artistDatas.map ((artistData)=>(
                <ArtistName key = {artistData.id} artistName={artistData.name} artistLink={artistData.external_urls.spotify} />
            ))}
        </div>

    )
}
//artistName={artistData.name} -- artistName is a prop, from my understanding, prop is a connection between parent comp and child comp. {artistData.name}is the value