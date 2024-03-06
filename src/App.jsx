import { Header } from "./Album components/common/Header.jsx"
import { Album } from "./Album components/Album.jsx"
import data from "./data.json"

console.log(data)

export const App = () => {
  const albums = data.albums.items
  const renderAlbums = albums.map(
    ({ id, name, images }) => (
      <Album
        albumName={name}
        key={id}
        coverImage={images[0].url}
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
