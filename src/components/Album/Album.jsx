import "./Album.css";
import { AlbumName } from "./AlbumName";
import { ArtistName } from "./ArtistName";
import { CoverImage } from "./CoverImage";

export const Album = (data) => {
  console.log(data);

  return (
    <section className="section__album">
      <AlbumName />
      <ArtistName />
      <CoverImage />
    </section>
  );
};
