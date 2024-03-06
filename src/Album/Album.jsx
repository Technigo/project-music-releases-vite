
import data from "../data.json"
import {AlbumName} from "./components/AlbumName"
import {ArtistName} from "./components/ArtistName"
import {CoverImage} from "./components/CoverImage"

export const Album = () =>{
return (
    <main>
        {
            data.albums.items.map((album)=>(
                <div className="album-card" key={album.id}>
                    <CoverImage album={album}/>
                    <AlbumName album={album} />
                    <ArtistName artists={album.artists}/>
                    
               </div>
            ))
        }
   </main> 
)
}
