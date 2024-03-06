//Component (function in react). Working with bigger amounts of code, you need to work in diffrent files (components).
export const Album = (props) => {
  return (
    <div>
      <p>{props.album.name}</p>
      <img src={props.album.images[0].url} alt={props.album.name} />
    </div>
  );
};
