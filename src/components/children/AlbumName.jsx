export const AlbumName = ({ name, external_urls }) => {
  return (
    <>
      <a href={external_urls}>{name}</a>
    </>
  );
};
