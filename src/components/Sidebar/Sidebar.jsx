import "./Sidebar.css";
import { PlayControll } from "../Controller/PlayControll";
import { TitleInfo } from "../TitleInfo/TitleInfo";

export const Sidebar = () => {
  return (
    <>
      <div className="sidebar">
        {/* Here is where I import the playlist */}
        <div className="playlist-item">
          <h2>Playlist</h2>
          <ul>
            <li className="playlist-items">
              <div className="playitem-container">
                <img
                  src="https://i.scdn.co/image/ab67706f00000003b018e1b439adbde87600046d"
                  alt=""
                  width="50px"
                  height="50px"
                />
                <div className="album-info">
                  <a href="" className="artist-name">
                    OFF POP
                  </a>
                  <p>New music off the beaten track. Cover: The Blaze</p>
                </div>
              </div>
              <PlayControll />
            </li>
            <li className="playlist-items">
              <div className="playitem-container">
                <img
                  src="https://i.scdn.co/image/ab67706f000000035b0e9da51a1af49edf3b52af"
                  alt=""
                  width="50px"
                  height="50px"
                />
                <div className="album-info">
                  <a href="" className="artist-name">
                    Hot Hits Switzerland
                  </a>
                  <p>
                    Switzerland's biggest hits right now. Cover: \nMarco Mengoni
                  </p>
                </div>
              </div>
              <PlayControll />
            </li>
            <li className="playlist-items">
              <div className="playitem-container">
                <img
                  src="https://i.scdn.co/image/ab67706f00000003d75ac29ec5576bbbe3bf841c"
                  alt=""
                  width="50px"
                  height="50px"
                />
                <div className="album-info">
                  <a href="" className="artist-name">
                    Schweizer Mundart
                  </a>
                  <p>Höre hier den besten Mundart-Pop aus der Schweiz.</p>
                </div>
              </div>
              <PlayControll />
            </li>
            <li className="playlist-items">
              <div className="playitem-container">
                <img
                  src="https://i.scdn.co/image/ab67706f00000003b018e1b439adbde87600046d"
                  alt=""
                  width="50px"
                  height="50px"
                />
                <div className="album-info">
                  <a href="" className="artist-name">
                    OFF POP
                  </a>
                  <p>New music off the beaten track. Cover: The Blaze</p>
                </div>
              </div>
              <PlayControll />
            </li>
            <li className="playlist-items">
              <div className="playitem-container">
                <img
                  src="https://i.scdn.co/image/ab67706f000000035b0e9da51a1af49edf3b52af"
                  alt=""
                  width="50px"
                  height="50px"
                />
                <div className="album-info">
                  <a href="" className="artist-name">
                    Hot Hits Switzerland
                  </a>
                  <p>
                    Switzerland's biggest hits right now. Cover: \nMarco Mengoni
                  </p>
                </div>
              </div>
              <PlayControll />
            </li>
            <li className="playlist-items">
              <div className="playitem-container">
                <img
                  src="https://i.scdn.co/image/ab67706f00000003d75ac29ec5576bbbe3bf841c"
                  alt=""
                  width="50px"
                  height="50px"
                />
                <div className="album-info">
                  <a href="" className="artist-name">
                    Schweizer Mundart
                  </a>
                  <p>Höre hier den besten Mundart-Pop aus der Schweiz.</p>
                </div>
              </div>
              <PlayControll />
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};
