import data from "./data.json";
import stretchGoal from "./stretch-goal.json";
import "./App.css";
import { AlbumCover } from "./components/AlbumCover";
import { AlbumTitle } from "./components/AlbumTitle";
import { ArtistName } from "./components/ArtistName";
import { EditorsPicks } from "./components/EditorsPicks";

console.log(data);

const albums = data.albums.items;
const playlists = stretchGoal.playlists.items;

export const App = () => {
  return (
    <>
    <h1 className="title">Editors Picks</h1>
      <header>
        {playlists.map((playlist) => (
          <div className="editors-picks" key={playlist.id}>
            <EditorsPicks
              image={playlist.images[0].url}
            />
          </div>
        ))}
      </header>
      <h1 className="title">Browse all</h1>
      <div className="container">
        {albums.map((album) => (
          <div className="album" key={album.id}>
            <AlbumCover image={album.images[0].url} />
            <AlbumTitle title={album.name} url={album.external_urls.spotify} />
            <ArtistName
              names={album.artists.map((artist) => artist.name)}
              urls={album.artists.map((artist) => artist.external_urls.spotify)}
            />
          </div>
        ))}
      </div>
    </>
  );
};
