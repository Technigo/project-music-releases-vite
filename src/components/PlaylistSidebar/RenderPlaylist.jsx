import { Playlists } from "./Playlists/Playlists.jsx";
import "./playlist.css";

// Component to render the playlist, playlistData comes from App.jsx
export const RenderPlaylist = ({ playlistData }) => {

  return (
    <>
        <section className="playlist-section">
            <Playlists playlists={playlistData}/>
        </section>
    </>
  )
}