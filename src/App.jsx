import { AlbumList } from "./components/AlbumList/AlbumList";
import { Hero } from "./components/Hero/Hero";
import { PlayList } from "./components/PlayList/PlayList";
import { Footer } from "./components/commons/Footer";

export const App = () => {
  return (
    <>
      <main>
        <Hero />
        <PlayList />
        <AlbumList />
      </main>
      <Footer />
    </>
  );
};
