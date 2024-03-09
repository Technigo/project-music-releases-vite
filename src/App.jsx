import { Album } from "./components/Album"
import data from "./data.json"

const selectAlbums = data.albums.items

export const App = () =>{
return(
  <div className="albums">
    {selectAlbums.map(album => (
      <Album 
        key={album.id}
        artistName={album.artists[0].name}
        coverImage={album.images[0].url}
        albumName={album.name}
      />
    ))}
  </div>
)
}



//CONSOLE.LOG HERO HERE:
// console.log(data.albums.items)
// console.log(data.albums.items.slice(0, 2)) 
// console.log("Artist name: ", data.albums.items[0].artists[0].name)
// console.log("Cover image: ", data.albums.items[0].images[0].url)
// console.log("Album name: ", data.albums.items[0].name)
/* const consoleLog = (selectAlbums) => {
  const filteredItems = selectAlbums.map(album =>({
    artistName: album.artists[0].name,
    albumName: album.name,
    coverImage: album.images[0].url,
    id: album.id
  }
  )) 
  console.log(filteredItems)
} */

// consoleLog(selectAlbums)
// consoleLog(selectAlbums.slice(0, 2))