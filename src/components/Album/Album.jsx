import "./Album.css";
import { TitleInfo } from "../TitleInfo/TitleInfo";
import { PlayControll } from "../Controller/PlayControll";

export const Album = ({ name, artists, external_urls, images }) => {
  return (
    <div className="album-item">
      <PlayControll />
      <img src={images.url} alt="" />
      <TitleInfo name={name} artists={artists} external_urls={external_urls} />
    </div>
  );
};

Album.defaultProps = {
  image: "Album image is missing",
};
