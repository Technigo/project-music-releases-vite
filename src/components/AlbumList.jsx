import { AlbumItem } from "./AlbumItem";

export const AlbumList = ({ title, albumType, items }) => {
  return (
    <section className="album__list">
      <h2 className="album__list__title">{title}</h2>
      {items
        .filter((item) => item.album_type === albumType) // Filter based on albumType
        .map((item) => {
          return (
            <AlbumItem
              key={item.id}
              image={item.images?.[0]?.url}
              albumType={item.album_type}
              albumName={item.name}
              albumUrl={item.external_urls?.spotify}
              artists={item.artists}
            />
          );
        })}
    </section>
  );
};
