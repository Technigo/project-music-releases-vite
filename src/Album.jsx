import { AlbumName } from "./Components/AlbumName/AlbumName"
import {ArtistName} from "./Components/ArtistName/ArtistName"
import { CoverImagage } from "./Components/CoverImage/CoverImage"
import {Aside} from "./Components/Aside/Aside"
import "./index.css"



export const Album =(data)=>{
    const albums=data.data

    const singlesArr=albums.filter(el=>el.album_type==="single")
    const albumsArr=albums.filter(el=>el.album_type!=="single")
 
return (
<main>
<h2>Singles</h2>
<div className="single_wrapper">
{singlesArr.map((obj)=> { return(
 <div  key={obj.name} className="album">
     <CoverImagage url={obj.images}/>
     <AlbumName name={obj.name} url={obj.external_urls.spotify}/>
     <ArtistName artist={obj.artists} />
</div>)})}</div>
         <Aside/>
<h2>Albums</h2>
<div className="albums_wrapper">
    {albumsArr.map((obj)=> { return(
        <div  key={obj.name} className="album">
     <CoverImagage url={obj.images}/>
     <AlbumName name={obj.name} url={obj.external_urls.spotify}/>
     <ArtistName artist={obj.artists} />
         </div>)})}</div>

</main>
)}