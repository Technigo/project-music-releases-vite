import { Header } from "./components/commons/Header";
import albums from "./albums.json";

console.log(albums);

export const App = () => {
  return (
    <div>
      <Header />
    </div>
  );
};
