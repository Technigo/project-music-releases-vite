import data from "./data.json";
import { Album } from "./Components/Album";
import "./App.css";

console.log(data);



export const App = () => {
  return (
    <div className="App">
      <Album albums={data.albums.items}/>
    </div>
  )
};
