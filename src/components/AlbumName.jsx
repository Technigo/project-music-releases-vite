/* eslint-disable react/prop-types */
export const AlbumName = ({ name, musicUrl }) => {
  return (
    <a className="album-link" href={musicUrl}>{name}
    </a>
   
  );
};
