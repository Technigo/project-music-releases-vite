import data from "./data.json";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { AlbumList } from "./components/AlbumList";


import './index.css';


console.log(data);

export const App = () => {
  return (
    <div className="App">
      <Header />
      <AlbumList albums={data.albums.items}/>
      <Footer />
    </div>
  );
};
