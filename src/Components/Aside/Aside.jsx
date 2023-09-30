import data from "../../stretched-goal.json";
import { PlaylistItem } from "../PlaylistItem/PlaylistItem";
import style from "./Aside.module.css";

export const Aside = () => {
  // I imported json called data( line 1 ) and it contains array of objects that has all playlist data.
  // So I picked it up and assign to playlistArr
  const playlistArr = data.playlists.items;
  // message is a short text for playlist
  const message = data.message;

  return (
    <aside className={style.aside}>
      <h3 className={style.title}>PlayLists</h3>
      <h4 className={style.message}>{message}</h4>
      <div className={style.player_wrapper}>
        {/* I am rendering an array that contains data for playlist and passed then as a props to PlaylistItem conponent */}
        {playlistArr.map((obj) => (
          <PlaylistItem key={obj.id} obj={obj} />
        ))}
      </div>
    </aside>
  );
};
