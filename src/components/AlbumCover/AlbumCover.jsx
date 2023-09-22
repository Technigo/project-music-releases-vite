import "./albumcover.css";

export const AlbumCover = ({ image }) => {
  return (
    <div className="album-cover">
      <img src={image} alt="album-cover" />
    </div>
  );
};
