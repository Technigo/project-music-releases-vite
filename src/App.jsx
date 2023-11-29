import { Album } from "./components/Album";
import data from "./data.json";
import { Header } from "./components/Header";

console.log(data);
console.log(data.albums.items);

export const App = () => {
  return (
    <div>
      <Header />
      <Album albumProp={data.albums} />
    </div>
  );
}
