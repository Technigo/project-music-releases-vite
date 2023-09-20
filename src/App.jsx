import data from "./data.json";
import { Album } from "./components/Album.jsx";
import { Header } from "./components/Header.jsx"

console.log(data);
 
export const App = () => {
  return (
  <div className="App">
    <Header />
    <Album items={data} />
    <div>Find me in src/app.jsx!</div>;
  </div>
  );
};
