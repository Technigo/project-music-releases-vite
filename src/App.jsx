import data from "./data.json";
import {Album} from "./components/Album"
import {Header} from "./components/Header"
import "./index.css"

export const App = () => {
  return (
    <div className="App">
      <Header />
      <Album albums={data.albums.items} />
    </div>
  )
}

//  export const App = () => {
//    const albums = data.albums.items
//    console.log(albums)

//    <>
//     <Header />
//     {albums.map((album))}
//     </>

//   //  const artists = albums.map(
//   //   (album) => album.artists)
//   //   console.log(artists)
    
//   //   const artistName = artists.map(
//   //   (el) => el[0].name)
//   //  console.log(artistName)

//    const renderAlbums = () => {

//     return albums.map(
//       ({name}) => (
//         <Album 
//         name={name}
//         />
//       )
//     )
//    }

//   return (
//     <>
//     <Header />
//     <section>
//       {renderAlbums()}
//     </section>
//     </>
//   )
   
//  };

