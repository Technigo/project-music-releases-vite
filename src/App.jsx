import data from "./data.json";
import { Header } from "./Album components/common/Header.jsx";
import { Album } from "./Album components/Album.jsx";

console.log(data);

export const App = () => {
  return (
    <div className="header">
      <Header />
    <Album />
    </div>
  );
};

