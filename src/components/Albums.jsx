import "./Albums.css";
import data from "../data/albums.json";
import { AlbumName } from "./children/AlbumName";

export const Albums = () => {
  const { albums } = data;

  const renderAlbums = albums.items.map(({ id, name }) => {
    return <AlbumName key={id} name={name} />;
  });

  return (
    <>
      <div>{renderAlbums}</div>
    </>
  );
};
