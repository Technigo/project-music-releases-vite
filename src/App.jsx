import data from "./data.json"
import Album from "./Components/Album.jsx"
//remember to import css from album

console.log(data)

export const App = () => {
  return (
    <div>
      <Album data={data.albums.items} />
    </div>)
}
