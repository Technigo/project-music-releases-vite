import { Album } from "./components/Album"
import data from "./data.json"

console.log(data.albums.items.slice(0, 2))
//console.log("Artist:", data.albums.items)
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
