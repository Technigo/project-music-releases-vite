
import { Header } from "./components/Common/Header";
import { Album } from "./components/Album";
import data from "./data.json";

export const App = () => {
  const { albums } = data;
  
  return ( 
    <div className="container">
      <Header />
      {albums.items.map((album) => ( 
        <Album key={album.id} album={album} />
      ))}
    </div>
  );
};
/*import { Header } from "./components/Common/Header";
import { Album } from "./components/Album";
import data from "./data.json";

export const App = () => {
  const { albums } = data
  const renderAlbums = albums.items.map((album) => (
   <Album album={album.name} artist={album.artists.name} key={album.name} />
 ))
 
   return ( 
   <div>
     <Header />
   <div className="container">
     <section> {renderAlbums}</section>
   </div>
   </div>
   )
 };*/
 
  /*const { albums } = data
  
  return ( 
    <div className="container">
    <Header />
   {albums.items.map((album) => ( 
    <Album key={albums.id} album={album} />
    ))}
  </div>
  )
};*/
