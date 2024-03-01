import data from "./data.json";
import { Album } from "./Components/Album";
import { Header } from "./Components/Header";
import "./index.css";

console.log(data);



export const App = () => {
  return (
    <div className="App">
      <Header/>
      <Album albums={data.albums.items}/>
    </div>
  )
}
