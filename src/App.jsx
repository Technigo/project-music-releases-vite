import data from "./data.json";
import { Album } from "./components/Album";
import { Header } from "./components/Header/Header";

//here we pass the components from children album and header.
export const App = () => {
  return (
    <div>
      <Header />
      <Album data={data} />
    </div>
  );
  };

 