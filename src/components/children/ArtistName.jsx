export const ArtistName = ({ name, external_urls }) => {
  return (
    <div className="artist-link">
      <a href={external_urls}>{name}</a>
    </div>
  );
};
