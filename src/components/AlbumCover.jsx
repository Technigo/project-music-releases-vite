import "./styling/AlbumCover.css";

export const AlbumCover = ({ images }) => {
  const firstImage = images[0]
  return (
    <img className="album-cover" src={firstImage.url} alt={firstImage.name} />
  );
};




