import data from "./data.json";
import { Album } from "./components/Album/Album";

console.log(data);

export const App = () => {
  const { albums } = data;
  const renderAlbums = albums.items.map(({ name, id, images, artists, external_urls }) => (
    <Album name={name} key={id} image={images[1]} artists={artists} url={external_urls.spotify}/>
  ));

  return (
    <div>
      <section className="albums">{renderAlbums}</section>
    </div>
  );
};
