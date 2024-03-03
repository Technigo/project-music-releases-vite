import data from "./data.json";
import { Header } from "./ChildComponent/Header";
import { Album }from "./ChildComponent/Album";


console.log(data);


export const App = () => {
  return (
  <div className="App">
    <Header />
    <Album />
    </div>
  );
};
