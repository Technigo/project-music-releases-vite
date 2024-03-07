import data from "../data.json";
import { Album } from "./Album";

const { albums } = data;

const renderAlbum = arr => {
  const renderedAlbum = arr.map(
    ({ name, artists, id, images, external_urls }) => {
      return (
        <Album
          name={name}
          key={id}
          artists={artists}
          images={images}
          external_urls={external_urls}
        />
      );
    }
  );
  return renderedAlbum;
};

export const AllAlbums = () => {
  return renderAlbum(albums.items);
};

export const SortAlbums = () => {
  const filterAlbums = albums.items.filter(
    element => element.album_type !== "single"
  );
  return renderAlbum(filterAlbums);
};

export const SortSingles = () => {
  const filterSingles = albums.items.filter(
    element => element.album_type === "single"
  );
  return renderAlbum(filterSingles);
};
