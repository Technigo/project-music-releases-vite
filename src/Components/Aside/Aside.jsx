import data from "../../stretched-goal.json"
import { PlaylistItem } from "../PlaylistItem/PlaylistItem"
import style from "./Aside.module.css"

export const Aside = () => {
    const playlistArr=data.playlists.items
    const message=data.message

    
  return (
    <aside className={style.aside}>
        <h3 className={style.title}>PlayLists</h3>
        <h4 className={style.message}>{message}</h4>
        <div className={style.player_wrapper}>
        {playlistArr.map(obj=> <PlaylistItem key={obj.id} obj={obj}/>)}
        </div>
    </aside>
  )
}
