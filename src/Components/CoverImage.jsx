export const CoverImage = (props) => {
  const albumImage = props.coverImages[0];
  return <img className="cover-image" src={albumImage.url} alt="Music album cover image"></img>;
};
