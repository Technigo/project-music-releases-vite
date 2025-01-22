export const AlbumTitle = ({ title, url }) => {
  return (
    <h1>
      <a href={url}>{title}</a>
    </h1>
  );
};
