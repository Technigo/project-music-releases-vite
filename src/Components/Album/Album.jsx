import { AlbumName } from "../AlbumName/AlbumName";
import { ArtistName } from "../ArtistName/ArtistName";
import { CoverImage } from "../CoverImage/CoverImage";
import { PlayIcon } from "../PlayIcon/PlayIcon";
// import { Aside } from "../Aside/Aside";
import style from "./Album.module.css";

export const Album = (data) => {
  const albums = Array.isArray(data.data) ? data.data : [];
  //const albums = data.data;
  // const singlesArr = albums.filter((el) => el.album_type === "single");
  const albumsArr = albums.filter((el) => el.album_type !== "single");

  const createAlbumSection = (arr) => {
    return arr.map((obj) => {
      return (
        <div className={style.album} key={obj.id}>
          {/* Pass the imageUrl prop to the CoverImage component */}
          <CoverImage imageUrl={obj.images[1].url} />

          <AlbumName name={obj.name} url={obj.external_urls.spotify} />
          <PlayIcon />
          
          <ArtistName artist={obj.artists[0].name} />
        </div>
      );
    });
  };




  return (
    <main>
      {/* Single albums section */}
      {/* <h2 className={style.heading}>Singles</h2>
      <div className={style.single_wrapper}>
        {createAlbumSection(singlesArr)}
      </div> */}
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
