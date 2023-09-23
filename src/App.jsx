import { Album } from "./components/Album";
import data from "./data.json";

console.log(data);

export const App = () => {
  return (
    <>
      <Album />
      <div className="App">
        <div>
          <h1 className="header">New Albums & Singles</h1>
          <p className="header">Technigo Education Team</p>
        </div>
        <section className="album-wrapper">
          <div className="album"></div>
        </section>
      </div>
    </>
  );
};
