import "./index.css";
import { Header } from "./components/Header";
import data from "./data.json";

console.log(data);

export const App = () => {
  return (
    <header>
      <Header />
    </header>
  );
};
