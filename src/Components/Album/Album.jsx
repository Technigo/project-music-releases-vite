import { AlbumName } from "../AlbumName/AlbumName"
import {ArtistName} from "../ArtistName/ArtistName"
import { CoverImagage } from "../CoverImage/CoverImage"
import {Aside} from "../Aside/Aside"
import style from "./Album.module.css"




export const Album =(data)=>{
    const albums=data.data
    const singlesArr=albums.filter(el=>el.album_type==="single")
    const albumsArr=albums.filter(el=>el.album_type!=="single")

    const createAlbumSection =(arr)=>{
       return (arr.map((obj)=> { return(
            <div  key={obj.name} className={style.album}>
             <CoverImagage url={obj.images}/>
             <AlbumName name={obj.name} url={obj.external_urls.spotify}/>
              <ArtistName artist={obj.artists} />
            </div>)}))
    }

 
return (
<main>
    {/* Single albums section */}
  <h2 className={style.heading}>Singles</h2>
    <div className={style.single_wrapper}>
      {createAlbumSection(singlesArr)}
      </div>
         {/* Playlist */}
         <Aside/>
         {/* Albums section */}
  <h2 className={style.heading}>Albums</h2>
   <div className={style.albums_wrapper}>
   {createAlbumSection(albumsArr)}
   </div>
</main>
)}