import data from "./data.json";
import { Album } from "./components/Album.jsx";
import { Header } from "./components/Header.jsx";


console.log("This is the JSON-data",data);

// component to render structure of App
//passing the data from JSON into the items prop
export const App = () => {
  return (
  <div className="app">
    <Header />
    <Album items={data} /> 
  </div>
  );
};
