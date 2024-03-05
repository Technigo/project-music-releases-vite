import data from "./data.json";
import { Album } from "./components/Album";


console.log(data);

export const App = () => {
  const { albums } = data;
  const renderAlbum = albums.items.map(({ name }) => <Album name={name} />)
  console.log(albums)
  return <div>Find me in src/app.jsx!
    {renderAlbum}

  </div>;
};
