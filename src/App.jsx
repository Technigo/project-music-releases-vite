import { Header } from "./Album components/common/Header.jsx"
import { Album } from "./Album components/Album.jsx"
import data from "./data.json"

console.log(data)

export const App = () => {
  const renderAlbums = data.albums.items.map(
    ({ id, name }) => (
      <Album
        name={name}
        key={id}
      />
    )
  )

  return (
    <div className="wrapper">
      <Header />
      <div className="container">
        <p className="title">Releases</p>
        <section className="album-container">{renderAlbums}</section>
      </div>
    </div>
  )
}
