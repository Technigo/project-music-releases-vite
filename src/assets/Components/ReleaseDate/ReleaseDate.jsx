import "./ReleaseDate.css";

export const ReleaseDate = ({ album }) => {
  return <p>Release Date: {album.release_date}</p>;
};
