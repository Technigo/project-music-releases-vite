import { PlayIcons } from "./PlayIcons";

export const AlbumCover = ({ images }) => {
  return (
    <div className="album-cover-container">
      <img className="album-cover" src={images} alt="album-cover-image" />
      <PlayIcons />
    </div>
  );
};
