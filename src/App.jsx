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
      <aside className="big-wrapper">
        <Playlist playlistData={playlistData} />
      </aside>
      <main className="big-wrapper">
        <Album data={data} />
      </main>
      <footer className="big-wrapper">
        Technigo | Web Development Bootcamp Fall 2023 | Project: Music Releases
        Vite @ Julia Holm
      </footer>
    </div>
  );
};
