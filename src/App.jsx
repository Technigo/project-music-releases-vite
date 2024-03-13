import { Album } from "./components/Album"
import { Footer } from "./components/Footer";
import data from "./data.json"

const selectAlbums = data.albums.items

export const App = () => {
return(
  <div>
    <div className="albums">
      {selectAlbums.map(album => (
        <Album 
          key={album.id}
          artistName={album.artists[0].name}
          artistUrl={album.artists[0].external_urls.spotify}
          coverImage={album.images[0].url}
          albumName={album.name}
          albumUrl={album.external_urls.spotify}
        />
      ))}
    </div>
    <Footer/>
  </div>
  );
};


// I keep it for personal pourposes
//CONSOLE.LOG HERO HERE: 
// console.log(data.albums.items)
console.log(data.albums.items.slice(0, 2)) 
// console.log("Artist name: ", data.albums.items[0].artists[0].name)
// console.log("Cover image: ", data.albums.items[0].images[0].url)
// console.log("Album name: ", data.albums.items[0].name)
const consoleLog = (selectAlbums) => {
  const filteredItems = selectAlbums.map(album =>({
    artistName: album.artists[0].name,
    // albumName: album.name,
    // coverImage: album.images[0].url,
    // urlArtist: album.artists[0].external_urls.spotify,  
    // urlAlbum: album.external_urls.spotify,
    // id: album.id
  }
  )) 
  console.log(filteredItems)
}

consoleLog(selectAlbums)
// consoleLog(selectAlbums.slice(0, 2))
// console.log(data.album.external_urls.spotify.silece(0, 2))

