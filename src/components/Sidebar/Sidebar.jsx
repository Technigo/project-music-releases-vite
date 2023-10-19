import "./Sidebar.css";
import { PlayControll } from "../Controller/PlayControll";

export const Sidebar = ({ playlists }) => {
  return (
    <>
      <div className="sidebar">
        <div className="playlist-item">
          <h2>Playlist</h2>
          <ul>
            {playlists.map((playlist) => (
              <li key={playlist.id} className="playlist-items">
                <div className="playitem-container">
                  <a
                    href={playlist.external_urls.spotify}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <img
                      src={playlist.images[0].url}
                      alt="playlist image"
                      width="50px"
                      height="50px"
                    />
                  </a>
                  <div className="album-info">
                    <a
                      href={playlist.external_urls.spotify}
                      className="artist-name"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {playlist.name}
                    </a>
                    <p>{playlist.description}</p>
                  </div>
                </div>
                <PlayControll />
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
};
