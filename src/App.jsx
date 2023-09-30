import data from "./data.json";
import { Album } from "./Components/Album/Album";
import { Header } from "./Components/Header/Header";
import "./index.css";

export const App = () => {
  return (
    <div>
      <Header />
      <Album data={data.albums.items} />
    </div>
  );
};
