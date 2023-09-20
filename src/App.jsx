
// Importing necessary components and context providers
import { Header } from './components/Header';
//import { Album } from './components/Album';
//import { AlbumName } from './components/AlbumName';
//import { ArtistName } from './components/ArtistName';
//import { CoverImage } from './components/CoverImage';
import data from './data.json';

console.log(data)

export const App = () => {
  const items = data.items;
  console.log(items);
  return (
    <>
      <Header/>
      <div className="App">
          <Album items={data}/>
        </div>
    </>
  )
};



