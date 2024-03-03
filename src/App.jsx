import { Album } from "./components/Album/Album";
import { Header } from "./components/Header/Header";
import albumData from "./data.json";

export const App = () => {
  const albums = albumData.albums.items;

  return (
    <main>
      <Header />
      <section className="section__album">
        {albums &&
          albums.map(({ id, name, artists, external_urls, images }) => (
            <Album
              key={id}
              name={name}
              artists={artists}
              images={images}
              external_urls={external_urls}
            />
          ))}
      </section>
    </main>
  );
};
