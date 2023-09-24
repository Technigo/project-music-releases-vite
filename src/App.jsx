import data from "./data.json"
import Header from "./Components/AlbumComponents/Header"
import Album from "./Components/Album"

export const App = () => {
  return (
    <div className="App">
      <Header />
      <Album albumsArray={data.albums.items} />
    </div>
  )
}
