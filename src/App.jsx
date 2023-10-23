import data from "./data.json";
import { Album } from "./Album";
import { Header } from "./Header";

console.log(data);
export const App = () => {
  return (
    <div className="App">
      <Header />
      <Album items={data} />
    </div>
  );
};
