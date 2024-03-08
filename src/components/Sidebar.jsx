import data from "../stretch-goal.json";
import {Playlist} from "./Playlist";



export const Sidebar = () =>{
const sidebarDatas = data.playlists.items
console.log(sidebarDatas)
console.log(sidebarDatas[0].name) //name
console.log(sidebarDatas[0].images[0].url) //img src
console.log(sidebarDatas[0].external_urls.spotify)

return (
    <aside>
        {sidebarDatas.map(sidebarData =>(
            <Playlist key={sidebarData.id} playListName={sidebarData.name} playListImg={sidebarData.images[0].url} 
            playListLiink={sidebarData.external_urls.spotify}/>
        ))}
    </aside>
)
}