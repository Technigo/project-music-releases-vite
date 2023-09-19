import data from "./data.json";
import {Album} from "./Album"
import { Header } from "./Components/Header/Header"


console.log(data);

export const App = () => {
  return (
  <div>   
 <Header/>
  <Album data={data.albums.items}/>
  </div>);
};
