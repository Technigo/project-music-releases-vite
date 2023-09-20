import { Album } from "./Components/Album";
import { Header } from "./Components/Header";
import data from "./data.json";



export const App = () => {
  const albums = data.albums.items

  console.log(albums)
  const albumRender = ()=>{
    return(
      albums.map((album)=>{
        return (
          <Album key={album.id}
           name={album.name}
            artists={album.artists[0].name}
             images={album.images[1].url}/>
        )
      
    
      })
    )
 

  }
  



  return(
    <div>
    <Header />
    <section className="album-wrapper">
    {albumRender()}
    </section>
    

  </div>
  ) 
};
