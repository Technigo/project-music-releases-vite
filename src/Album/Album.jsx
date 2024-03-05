import { Fragment } from "react"
import data from "../data.json"
import {AlbumName} from "./components/AlbumName"
import {ArtistName} from "./components/ArtistName"
import {CoverImage} from "./components/CoverImage"

export const Album = () =>{
return (
    <Fragment>
        {
            data.albums.items.map((album)=>(
                <div className="album-card" key={album.id}>
                    <AlbumName album={album} />
                    <ArtistName artists={album.artists}/>
                    <CoverImage album={album}/>
               </div>
            ))
        }
   </Fragment> 
)
}
