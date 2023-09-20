import data from "./data.json";
import { Header } from "./Components/Header/Header";

console.log(data);

export const App = () => {
  return (
    <div className="App">
      <Header />
    </div>
  );
};
