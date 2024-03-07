import data from "./data.json";
import { Album } from "./components/Album";
import { Header } from "./components/Header.jsx"
import "./components/header.css"


export const App = () => {
  const { albums } = data;
  const renderAlbum = albums.items.map(({ name, artists, id, images, external_urls }) => (
    <Album name={name} key={id} artists={artists} images={images} external_urls={external_urls}/>
  ));
  return (
    <>
    <Header />
    <div className="album-collection">
      {renderAlbum}
    </div>
    </>
  );
};
