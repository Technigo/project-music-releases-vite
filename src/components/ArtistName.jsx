
/* eslint-disable react/prop-types */
export const ArtistName = ({ name, musicUrl }) => {
  return (
    <a className="artist-link" href={musicUrl} target="_blank" rel="noopener noreferrer">
  {name}
</a>

  );
};
