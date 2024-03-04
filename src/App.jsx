import data from "./data.json";
import { Header } from "./components/Common/Header";
import Album from "./components/Album/Album";

export const App = () => {
  const albumItems = data.albums.items;

  const albums = albumItems.map((albumObj) => {
    const album = {
      key: albumObj.id,
      name: albumObj.name,
      url: albumObj.external_urls.spotify,
      type: albumObj.type,
      imageUrl: albumObj.images[0].url,
      artists: albumObj.artists.map((artist) => ({
        name: artist.name,
        url: artist.external_urls.spotify,
      })),
    };

    return <Album key={album.key} album={album} />;
  });

  return (
    <div>
      <Header title="New Albums & Singles" />
      <div className="albumOuter">{albums}</div>
    </div>
  );
};
