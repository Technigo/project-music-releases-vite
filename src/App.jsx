import { Album } from "./components/Album";
import { Hero } from "./components/Hero/Hero";
import { Playlist } from "./components/Playlist";

export const App = () => {
  return (
    <main>
      <Hero />
      <Playlist />
      <Album />
    </main>
  );
};
