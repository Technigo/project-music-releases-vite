import data from "./data.json";
import { Album } from "./Components/Album/Album";
import { Header } from "./Components/Header/Header";

console.log(data);

export const App = () => {

  return (
  <div>
    <Header />
    <Album data={data} />
  </div>
)
};