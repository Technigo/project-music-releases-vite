import data from "./data.json";
import { Album } from "./components/Album";

console.log(data);

export const App = () => {
  const { albums } = data;
  const renderAlbum = albums.items.map(({ name, artists, id, images }) => (
    <Album name={name} key={id} artists={artists} images={images} />
  ));
  console.log(albums);
  return (
    <div className="album-collection">
      {/* Find me in src/app.jsx! */}
      {renderAlbum}
    </div>
  );
};
