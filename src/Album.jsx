import data from "./data.json";
import { AlbumName } from "./AlbumName";
import { ArtistName } from "./ArtistName";
import { CoverImage } from "./CoverImage";

export const Albums = ({ images, name, artists }) => {
  let imageObject = {
    imgUrl: images,
    imgAlt: "An Image of an music album",
  };
  return (
    <div className="album-image">
      <img src={imageObject.imgUrl} alt={imageObject.imgAlt}></img>
      <p> Album: {name} </p>
      <span> Artist: {artists} </span>
    </div>
  );
};
