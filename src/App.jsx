import data from "./data.json";
import {Album} from "./components/Album"
import {Header} from "./components/Header"


export const App = () => {
  return (
    <div className="App">
      <Header />
      <Album albums={data.albums.items} />
    </div>
  )
}


