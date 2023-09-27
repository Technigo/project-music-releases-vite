import data from "./data.json";
import { Header } from "./Components/Header";
import {Album} from "./Album"

console.log(data); // data is an object, not an array


export const App = () => {
  return ( // JSX
  <div>   
 <Header/> 
  <Album data={data.albums.items}/> 
  </div>);// data.albums.items is an array
};