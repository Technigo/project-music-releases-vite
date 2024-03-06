/* eslint-disable react/prop-types */
export const AlbumName = ({ name, musicUrl }) => {
  return (
    <a className="album-link" href={musicUrl} target="_blank"  rel="noopener noreferrer">{name}</a>
   
  );
};
 