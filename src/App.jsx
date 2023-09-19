import data from "./data.json";
import { Header } from "./Components/Header";
// import { Albums } from "./Components/Albums.jsx";
console.log(data);

export const App = (data) => {
  return (
    <>
      <Header />
      <Albums data={data} />
    </>
  );  
};
