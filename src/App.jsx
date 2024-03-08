import { Album } from "./components/Album"
import data from "./data.json"

console.log(data.albums.items.slice(0, 2)) 

//Console.log hero help here:
console.log("Artist name: ", data.albums.items[0].artists[0].name)
console.log("Cover image: ", data.albums.items[0].images[0].url)
console.log("Album name: ", data.albums.items[0].name)


export const App = () =>{
return(
  <div className="albums">
    {data.albums.items.map(album => (
      <Album
      key={album.id}
      artistName={album.artists[0].name}
      coverImage={album.images}
      albumName={album.name}
    />
  ))}
  </div>
)
}
