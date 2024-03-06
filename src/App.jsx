import data from "./data.json";
import { Album } from "./components/Album/Album";

console.log(data);

export const App = () => {
  const { albums } = data;
  const renderAlbums = albums.items.map(({ name, id }) => (
    <Album name={name} key={id} />
  ));

  return (
    <div>
      <section className="albumNameList">{renderAlbums}</section>
    </div>
  );
};
