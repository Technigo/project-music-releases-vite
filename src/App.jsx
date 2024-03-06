import data from "./data.json";
import Album from "./components/Album"
import {Header} from "./components/common/Header";


export const App = () => {
  return (
   <div>  
    <Header />
    {data.albums.items.map((album) => (
      <Album album={album} key={album.id}/>
    ))}
   </div>
  
  )
};
