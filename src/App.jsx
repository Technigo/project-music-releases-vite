import Album from './components/Album.jsx'
import data from "./data.json"
import Header from "./components/Header.jsx"
import Footer from "./components/Footer.jsx"

console.log(data)

export const App = () => {
  return (
    <div> 
      <Header />
    <div className="album-container">
      {data.albums.items.map((album) => (
      <Album key={album.id} albumData={album} />
      ))}
      </div>
      <div> 
        <Footer />
        </div>
    </div>
  )
}
