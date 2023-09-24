import data from "./data.json"
import { Album } from "./components/Album"
import { Header } from "./components/Header"

export const App = () => {

  //Saves all albums as an array (from the json-file)
  let albumArray = data.albums.items

  return (
    <>
      <div className="app">
        <Header />

        <div className="allAlbums">
          {/*Maps through all albums and creates the Album component, sends all data about album as a prop*/}
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