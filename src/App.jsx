import data from "./data.json";
import moreData from "./stretch-goal.json";
import { Header } from "./assets/Components/Header/Header.jsx";
import { Sidebar } from "./assets/Components/Sidebar/Sidebar.jsx";

import { Section } from "./assets/Components/Section/Section.jsx";
import "./App.css";

export const App = () => {
  return (
    <div className="app">
      <Header />

      <div id="albumContainer" className="album-container">
        <Section name="Single" filter="single" data={data} />
        <Section name="Album" filter="album" data={data} />
      </div>
      <div className="sideBar">
        {moreData.playlists.items.map((playlists, index) => (
          <Sidebar key={index} playlists={playlists} />
        ))}
      </div>
    </div>
  );
};
