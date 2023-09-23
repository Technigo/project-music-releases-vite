import { Header } from "./components/Header.jsx";
import { AlbumCard } from "./components/AlbumCard.jsx";
import data from "./data.json";

console.log(data);

export const App = () => {
  return (
    <>
      <main>
        <Header />
        <div className="albumWrapper">
          {/* Passing the whole data object as a prop which allows the AlbumCard component to have access to the data object and use its properties or values as needed. */}
          <AlbumCard musicData={data} />
        </div>
      </main>
    </>
  );
};

