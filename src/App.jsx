import data from "./data.json";
import playlistData from "./stretched-goal.json";
import { Header } from "./components/Header/Header.jsx";
import { Album } from "./components/Album/Album.jsx";
import { Playlist } from "./components/Playlist/Playlist.jsx";

// console.log(data);
// console.log(dataTwo);

export const App = () => {
  return (
    <div className="page-wrapper">
      <Header />
      <main>
        <Album data={data} />
      </main>
      <aside>
        <Playlist playlistData={playlistData} />
      </aside>
    </div>
  );
};
