import data from "./data.json";
import { Album } from "./components/Album.jsx";
import { Header } from "./components/Header/Header.jsx";

//console.log(data);

export const App = () => {
  return (
    <div className="page-wrapper">
      <Header />
      <Album data={data} />
    </div>
  );
};
