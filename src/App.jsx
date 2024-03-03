import { Album } from "./components/Album/Album";
import { Header } from "./components/Header/Header";
import data from "./data.json";

export const App = () => {
  return (
    <main>
      <Header data={data} />
      <Album data={data} />
    </main>
  );
};
