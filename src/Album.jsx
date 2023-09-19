import { AlbumName } from "./Components/AlbumName/AlbumName"
import {ArtistName} from "./Components/ArtistName/ArtistName"
import { CoverImagage } from "./Components/CoverImage/CoverImage"
import "./index.css"



export const Album =(data)=>{
    console.log(data.data)
    const albums=data.data
    console.log(data.data[0].external_urls)

return (
<main>

    {albums.map((obj)=> { return(
        <div  key={obj.name} className="album">
  
     <CoverImagage url={obj.images}/>
     <AlbumName name={obj.name} url={obj.external_urls
.spotify}/>
     <ArtistName artist={obj.artists} />
 </div>)
    }
)}
</main>
)}