import { Album } from "./Components/Album";
import { Header } from "./Components/Header";
import data from "./data.json";



export const App = () => {
  return <div>
    <Header />
    <section className="album-wrapper">
    <Album />

    </section>
    

  </div>;
};
