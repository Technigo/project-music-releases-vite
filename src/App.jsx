import data from "./data.json";
import { Album } from "./components/Album";

console.log(data);

export const App = () => {
  const albums = data.albums;

  const renderMusicInfo = () => 
    albums.map(
      ({id, name}) => (
        <Album 
          key={id}
          name={name}
        />
      )
    );


  const renderContent = renderMusicInfo()

  return (
    <div className="App">
      <section className="musicOuter">{renderContent}</section>
    </div>
  );
};
