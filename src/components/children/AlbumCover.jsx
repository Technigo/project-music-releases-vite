import { PlayIcons } from "./PlayIcons";

export const AlbumCover = ({ images }) => {
  return (
    <div className="album-cover-container">
      <PlayIcons />
      <img className="album-cover" src={images} alt="album-cover-image" />
    </div>
  );
};
