import { AlbumName } from "./AlbumName/AlbumName";
import { ArtistName } from "./ArtistName/ArtistName";
import { CoverImage } from "./CoverImage/CoverImage";

//export const Album = (props) => {

//let albumName = props.items.name
//let artistName = props.items.artists[0].name

export const Album = ({ artists, items, images }) => {
  //  let coverImageArray = images

  console.log(artists);
  console.log(images);
  console.log(items);
  return (
    <div className="album">
      <p>
        <CoverImage images={images} />
      </p>
      <p>
        <ArtistName artists={artists} />
      </p>
      <div>
        <AlbumName items={items} />
      </div>
    </div>
  );
};
