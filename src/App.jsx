import data from './data.json'
import { Header } from './Header.jsx'
import { Album } from './Album.jsx'

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
