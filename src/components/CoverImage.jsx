export const CoverImage = ({ coverImage }) => {
  const largeImage = coverImage[0];
  const mediumImage = coverImage[1];
  const smallImage = coverImage[2];
  return (
    <>
      <img
        srcSet={`${smallImage.url} 64w, ${mediumImage.url} 300w, ${largeImage.url} 800w`}
        sizes="(max-width: 600px) 480px,
         (max-width: 1024px) 800px,
         1200px"
        src={mediumImage.url}
        alt="Cover image"
      />
    </>
  );
};
