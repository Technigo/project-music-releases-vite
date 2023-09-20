import "./CoverImage.css";

export const CoverImage = ({ albumCover }) => {
  const index = 0;
  const image = {
    url: albumCover.images[index].url,
    alt: albumCover.name,
  };

  return (
    <div className="cover-image">
      <img src={image.url} alt={image.alt} />
    </div>
  );
};
