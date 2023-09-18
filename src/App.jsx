import data from "./data.json";
console.log(data); // create these in child components?
import { Album } from "./components/Album.jsx";
import { Header } from "./components/Header.jsx";

export const App = () => {
  const albums = data.albums.items;

  // The contents that are actually rendered via Main.jsx onto the Virtual Dom. The map-method is used here to go through each object in the array. The component Albums takes in the data and adds in the correct value into the propNames image, name and artist. Header is appended first, since I don't want this to render more than once.
  return ( // I'm using the React fragment here to get rid of some of the divs from the HTML structure.
    <>
    <Header />
    <div className="card">
      {albums.map(album => {
        return (
          <div className="card-content" key={album.id}>
            <Album  
              image={album.images[1].url}
              name={album.name} 
              artist={album.artists[0].name}
            />
          </div>
        )
      })}
    </div>
    </>
  );
};
