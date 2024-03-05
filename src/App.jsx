import data from "./data.json";
import { Album } from "./components/Album";


console.log(data);

export const App = () => {
  const { albums } = data;
  const renderAlbum = albums.items.map(({ name, artists, id }) => <Album name={name} key={id} artists={artists} />)
  console.log(albums)
  return <div>Find me in src/app.jsx!
    {renderAlbum}

  </div>;
};
