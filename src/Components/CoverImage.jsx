export const CoverImage = (props) => {
  console.log(props.coverImages);
  const albumImage = props.coverImages[0];
  return <img clasName="cover-image" src={albumImage.url} alt="Music album cover image"></img>;
};
