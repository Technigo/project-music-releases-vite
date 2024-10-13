import recentReleasesData from "./data.json";
import editorsPicksData from "./stretch-goal.json";
import { HeroHeader } from "./components/HeroHeader";
import { AlbumList } from "./components/AlbumList";
import { Sidebar } from "./components/Sidebar";

export const App = () => {
  // Destructure Recent Releases Data from the JSON structure
  const {
    albums: { items: recentReleases },
  } = recentReleasesData;

  // Destructure Editors Picks from the JSON structure
  const {
    message,
    playlists: { items },
  } = editorsPicksData;

  return (
    <main>
      <HeroHeader />
      <div className="grid-container">
        <section className="album-list__container">
          <AlbumList
            title="Fresh Tracks You’ll Love"
            albumType="single"
            items={recentReleases}
          />
          <AlbumList
            title="New Albums to Explore"
            albumType="album"
            items={recentReleases}
          />
        </section>
        <Sidebar title={message} editorsPicks={items} />
      </div>
    </main>
  );
};
