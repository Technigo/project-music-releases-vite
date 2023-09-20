import data from "./data.json";
import Album from "./components/Album";

console.log(data);

export const App = () => {
  return (
    <div>
      {data.albums.items.map((album) => (
        <Album
          key={album.id}
          name={album.name}
          coverImage={album.images[0].url}
          artists={album.artists}
        />
      ))}
    </div>
  );
};
