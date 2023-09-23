
/* eslint-disable react/prop-types */
export const ArtistName = ({ name, musicUrl }) => {
  return (
    <a className="artist-link" href={musicUrl}>{name}
    </a>
  );
};
