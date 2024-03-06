import { Fragment } from "react";
import data from "../stretch-goal.json";
import { Playlist } from "./Playlist.jsx";

console.log("Playlists", data);

export const Sidebar = () => {
  return (
    <Fragment>
      <h2>{data.message}</h2>
      {data.playlists.items.map((list, i) => {
        return (         
          <Playlist
            key={i}
            img={list.images[0].url}
            name={list.name}
            url={list.external_urls.spotify}
            desc={list.description}
          />
        );
      })}
    </Fragment>
  );
};
