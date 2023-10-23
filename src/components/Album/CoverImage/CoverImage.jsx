import { BtnIcons } from "./BtnIcons/BtnIcons.jsx";

export const CoverImage = ({ albumCover }) => {
  const albumIndex = 0;
  const albumImage = {
    src: albumCover.images[albumIndex].url,
    alt: albumCover.name,
  };

  return (
    <div className="album-cover cover">
      <img src={albumImage.src} alt={albumImage.alt} />
      <BtnIcons />
    </div>
  );
};
