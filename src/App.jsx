import data from "./data.json";
import { Header } from "./components/common/Header";
import { Album } from "./components/album/Album";
console.log(data)


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
};
