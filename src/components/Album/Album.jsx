import "./Album.css";
import { TitleInfo } from "../TitleInfo/TitleInfo";

export const Album = ({ name, artists, external_urls, images }) => {
  return (
    <div className="album">
      <img src={images.url} alt="" />
      <TitleInfo name={name} artists={artists} external_urls={external_urls} />
    </div>
  );
};

Album.defaultProps = {
  image: "Album image is missing",
};
