import data from "./data.json"
import { Album } from "./components/Album"
import { Header } from "./components/Header"

let albumArray = data.albums.items
console.log(albumArray)
export const App = () => {
  return (
    <>
      <div className="app">
        <Header />

        <div className="allAlbums">
          {albumArray.map((album) => (
            <Album 
            key={album.id} 
            album={album} 
            />
          ))}
        </div>

      </div>
    </>
  )
}
