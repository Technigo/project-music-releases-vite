export const AlbumName = (props) => {
  return (
    <a href={props.href} className="album-name">
      {" "}
      {props.albumName}
    </a>
  );
};
