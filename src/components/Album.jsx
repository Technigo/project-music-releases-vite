import { AlbumName } from "./AlbumName"
import { ArtistName } from "./ArtistName";
import { CoverImage } from "./CoverImage"

export const Album =({albumData}) =>{
    const artistDatas = albumData.artists;
    return (
        <div>
            <CoverImage coverImage={albumData.images[1].url} /> 
            <AlbumName albumName={albumData.name} albumLink={albumData.external_urls.spotify} />
            {artistDatas.map ((artistData,index)=>(
                <ArtistName key={artistData.id} artistName={artistData.name} artistLink={artistData.external_urls.spotify} index={index} length= {artistDatas.length} />
            ))}
        </div>
    )
}