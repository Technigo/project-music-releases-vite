import { Fragment } from "react";
import data from "../stretch-goal.json";
import { Playlist } from "./Playlist.jsx";

console.log("Playlists", data);

export const Sidebar = () => {
  return (
    <Fragment>
      <p>{data.message}</p>
      {data.playlists.items.map((list, i) => {
        return (         
          <Playlist
            key={i}
            name={list.name}
            url={list.external_urls.spotify}
            desc={list.description}
          />
        );
      })}
    </Fragment>
  );
};
