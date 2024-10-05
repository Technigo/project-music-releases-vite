import data from "./data.json";
import { Header } from "./components/Header";
import { Album } from "./components/Album";

export const App = () => {
  const albumDatas = data.albums.items;
  return (
    <>
      <Header />
      <div className="album-card">
        {albumDatas.map((albumData) => (
          <Album key={albumData.id} albumData={albumData} />
        ))}
      </div>
    </>
  );
};
