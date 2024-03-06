import data from "./data.json";
import { Header } from "./components/common/Header";
import { Album } from "./components/Album";
import "./index.css"
console.log(data)


export const App = () => {
  return ( 
    <div className="container">
    <Header />
    <Album album={data.albums.items}/>
  </div>
  )
};
