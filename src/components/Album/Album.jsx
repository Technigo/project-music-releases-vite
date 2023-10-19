import "./Album.css";
import { TitleInfo } from "../TitleInfo/TitleInfo";
import { PlayControll } from "../Controller/PlayControll";

export const Album = ({ name, artists, external_urls, images }) => {
  return (
    <div className="album-item">
      <div className="album_cover">
        <PlayControll />
        <img className="albumCoverImage" src={images.url} alt="album image" />
      </div>
      <TitleInfo name={name} artists={artists} external_urls={external_urls} />
    </div>
  );
};

Album.defaultProps = {
  image: "Album image is missing",
};
