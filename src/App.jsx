import data from "./data.json";

import { Header } from "./Components/Header/Header";
import { Album } from "./Components/Album/Album";

console.log(data);

export const App = () => {
  return <div>
    <Header />
    <Album data={data} />
  </div>;
};
