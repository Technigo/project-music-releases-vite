import data from "./data.json";
import { Album } from './Album';
import { Header } from "./Header";
import "./App.css";
//console.log(data);

export const App = () => {
  return (
  <div>
  <Header />
  <div className="albumGrid"> 
 {data.albums.items.map((album, index) => (
    <Album key={index} album={album} />
 ))}
   </div>
</div>
  );
};
