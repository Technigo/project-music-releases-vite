import { ArtistName } from "./ArtistName.jsx";

export const Album = ({ name, releaseDate, artists }) => {
  return (
    <div>
      <p>Album name: {name}</p>
      <p>Release date: {releaseDate} </p>
      <ArtistName artists={artists} />
    </div>
  );
};
