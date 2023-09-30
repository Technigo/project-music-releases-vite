import { AlbumName } from "../AlbumName/AlbumName";
import { ArtistName } from "../ArtistName/ArtistName";
import { CoverImage } from "../CoverImage/CoverImage";
// import { Aside } from "../Aside/Aside";
import style from "./Album.module.css";

export const Album = (data) => {
  const albums = Array.isArray(data.data) ? data.data : [];
  //const albums = data.data;
  const singlesArr = albums.filter((el) => el.album_type === "single");
  const albumsArr = albums.filter((el) => el.album_type !== "single");

  const createAlbumSection = (arr) => {
    return arr.map((obj) => {
      return (
        <div key={obj.name} className={style.album}>
          {/* Pass the imageUrl prop to the CoverImage component */}
          <CoverImage imageUrl="https://i.scdn.co/image/ab67616d0000b273ec65553ce98439bcf0595e60" />

          <AlbumName name={obj.name} url={obj.external_urls.spotify} />
          <ArtistName artist={obj.artists} />
        </div>
      );
    });
  };

  return (
    <main>
      {/* Single albums section */}
      <h2 className={style.heading}>Singles</h2>
      <div className={style.single_wrapper}>
        {createAlbumSection(singlesArr)}
      </div>
      {/* Playlist */}
      {/* <Aside /> */}
      {/* Albums section */}
      <h2 className={style.heading}>Albums</h2>
      <div className={style.albums_wrapper}>
        {createAlbumSection(albumsArr)}
      </div>
    </main>
  );
};
