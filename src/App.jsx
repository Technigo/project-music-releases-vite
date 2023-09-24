import data from "./data.json"
import playlistData from "./stretched-goal.json"
import { Album } from "./components/Album"
import { Header } from "./components/Header"
import { PlaylistAside } from "./components/PlaylistAside"

export const App = () => {

  //Saves all albums as an array (from the json-file)
  let albumArray = data.albums.items

  //Saves the editor's pick-playlists in an array from the stretched-goal json-file
  let playlistArray = playlistData.playlists.items

  return (
    <>
      <div className="app">
        <Header />

        <aside className="allPlaylists">
          {playlistArray.map((playlistInfo) => (
            <PlaylistAside key={playlistInfo.id} playlistInfo={playlistInfo} />
          ))}
        </aside>

        <div className="allAlbums">
          {/*Maps through all albums and creates the Album component, sends all data about album as a prop*/}
          {albumArray.map((album) => (
            <Album 
            key={album.id} 
            album={album} 
            />
          ))}
        </div>

      </div>
    </>
  )
}