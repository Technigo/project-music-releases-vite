import { Icon } from "./Icon.jsx";

export const AlbumCover = ({ image, title }) => {
  return (
    <div className="album-cover">
      <img src={image} alt={title} />
      <div className="icon-container">
        <Icon icon="Heart" />
        <Icon icon="Play" />
        <Icon icon="Dots" />
      </div>
    </div>
  );
};
