import data from "./data.json";
import {Album} from "./components/Album"
import {Header} from "./components/Header"

console.log(data);

 export const App = () => {
   const albums = data.albums.items
   console.log(albums)

   const artists = albums.map(
    (album) => album.artists)
    console.log(artists)
    
    const artistName = artists.map(
    (el) => el[0].name)
   console.log(artistName)

   const renderAlbums = () => {

    return albums.map(
      ({name}) => (
        <Album 
        name={name}
        />
      )
    )
   }

  return (
    <>
    <Header />
    <section>
      {renderAlbums()}
    </section>
    </>
  )
   
 };

