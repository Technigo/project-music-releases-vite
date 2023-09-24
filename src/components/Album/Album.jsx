import { CoverImage } from "./CoverImage/CoverImage.jsx";
import { ArtistName } from "./ArtistName/ArtistName.jsx";
import { AlbumName } from "./AlbumName/AlbumName.jsx";
import "./Album.css";

export const Album = ({ data }) => {
  const albumsItems = data.albums.items;
  // console.log(`Items array (of each new release)`, albumsItems);

  return (
    <section className="new-releases">
      <h1>New albums & singles</h1>
      <div className="releases-wrapper">
        {albumsItems.map((albumInfo) => {
          //console.log(`Individual album info`, albumInfo);
          return (
            <div className="album-container" key={albumInfo.id}>
              <CoverImage albumCover={albumInfo} />
              <AlbumName albumName={albumInfo} />
              <ArtistName artistInfo={albumInfo.artists} />
            </div>
          );
        })}
      </div>
    </section>
  );
};
