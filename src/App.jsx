import data from "./data.json"
import "./index.css"

import { AlbumCard } from "./components/AlbumCard"

export const App = () => {
  return (
    <>
      <main className="album-card-box">
        {data.albums.items.map((albumcard) => (
          < AlbumCard key={albumcard.id} albumcard={albumcard} />
        ))}
      </main>
    </>
  )
}