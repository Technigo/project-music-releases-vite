import data from "./data.json";
import { Album } from './Album';

//console.log(data);

export const App = () => {
  return (
  <div>
  <div>Find me in src/app.jsx!</div>
 {data.albums.items.map((album, index) => (
    <Album key={index} album={album} />
 ))}
</div>
  );
};
