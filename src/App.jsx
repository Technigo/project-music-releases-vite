import { Header } from "./Components/Header";
import { Album } from "./Album";

import data from "./data.json";

console.log("data", data);

export const App = () => {
  return <div>
    <Header />
    <Album />
  </div>;
};
