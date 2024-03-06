import data from "./data.json";
import { Header } from "./Components/Header"
import { Album } from "./Components/Album"

console.log(data);

const App = () => {
  const albums = data.albums.items;

  const renderAlbums = () => albums.map(({ id, name, images, external_urls, artists }) => (
    <Album
    key={id}
    albumName={name}
    imgSrc={images[0].url}
    albumUrl={external_urls.spotify}
    artists={artists}
    />
  ));

  const renderContent = renderAlbums();
  
return (
  <div className="wrapper">
    <Header />
    <section className="album-section">{renderContent}</section>
  </div>
)
}

export default App