import { CoverButtons } from "./CoverButtons";

export const CoverImage = ({ coverImage }) => {
  const largeImage = coverImage[0];
  const mediumImage = coverImage[1];
  return (
    <div className="ImageWrapper">
      <img
        srcSet={`${mediumImage.url} 300w, ${largeImage.url} 800w`}
        sizes="(max-width: 1024px) 300px,
         640px"
        src={mediumImage.url}
        alt="album cover image"
      />
      <CoverButtons />
    </div>
  );
};
