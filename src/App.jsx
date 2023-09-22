import data from "./data.json";

import { Header } from "./components/Header";
import Album from "./components/Album";
import "./index.css";

export const App = () => {
  const albumsData = data.albums.items;
  console.log(albumsData);

  return (
    <>
      <Header />
      <div className="album-wrapper">
        {albumsData.map((albumData) => (
          <Album key={albumData.id} albumData={albumData} />
        ))}
      </div>
    </>
  );
};
