import data from "./data.json";
import { Album } from './components/Album';
import { Header } from "./components/Header";
import "./App.css";

// The main App component that renders the Header and Album components.
export const App = () => {
  return (
  <div>
  <Header />
  <div className="albumGrid"> 
  {/* Mapping through each album data and rendering the Album component */}
 {data.albums.items.map((album, index) => (
    <Album key={index} album={album} />
 ))}
   </div>
</div>
  );
};
