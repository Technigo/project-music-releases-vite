
// Importing necessary components and context providers
import { Header } from './components/Header';
import { Album } from './components/Album';

import data from './data.json';

console.log(data)

let album = data.album.items

export const App = () => {
  

//function map over album array
const renderAlbums = () => {
  return album.map((album) => {
    <Album 
      key={album.id}
      name={album.name}
      artists={album.artists}
    />;
  });
}

  return (
    <>
    <Header/>
    <section className="album-grid">
     {renderAlbums()}
    </section>
    </>
  );
};



