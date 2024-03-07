import data from "../data.json"
import {AlbumName} from "./components/AlbumName"
import {ArtistName} from "./components/ArtistName"
import {CoverImage} from "./components/CoverImage"

export const Album = () =>{
return (
    <section className="album-section">  
        {
            data.albums.items.map((album)=>(
                <div className="album-card" key={album.id}>
                    <CoverImage album={album}/>
                    <ul className="album-info">
                        <li><AlbumName album={album} /></li>
                        <li><ArtistName artists={album.artists}/></li>
                    </ul>
               </div>
            ))
        }
   </section>
)
}
