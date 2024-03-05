import data from './data.json'
import { Header } from './assets/Components/Header/Header.jsx'
import { Album } from './assets/Components/Album/Album.jsx'
import './App.css'

console.log(data)

export const App = () => {
  return (
    <div className="App">
      <Header />
      <div className="album-container">
        {data.albums.items.map((album, index) => (
          <Album key={index} album={album} />
        ))}
      </div>
    </div>
  )
}
