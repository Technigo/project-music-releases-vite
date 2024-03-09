import data from "./data.json";
import { Header } from "./components/Header";
import { Album } from "./components/Album";

export const App = () => {
  const albumDatas = data.albums.items;
  console.log(albumDatas);
  console.log(albumDatas[0].name);
  console.log(albumDatas[2].id);
  console.log(albumDatas[3].external_urls.spotify);
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
