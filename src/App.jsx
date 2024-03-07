import data from './data.json'
import moreData from './stretch-goal.json'
import { Header } from './assets/Components/Header/Header.jsx'
import { Album } from './assets/Components/Album/Album.jsx'
import { Sidebar } from './assets/Components/Sidebar/Sidebar.jsx'
import './App.css'

console.log(data)
console.log(moreData)

export const App = () => {
  return (
    <div className="App">
      <Header />
      <div className="album-container">
        {data.albums.items.map((album, index) => (
          <Album key={index} album={album} />
        ))}
      </div>
      <div className="sideBar">
        {moreData.playlists.items.map((playlists, index) => (
          <Sidebar key={index} playlists={playlists} />
        ))}
      </div>
    </div>
  )
}
