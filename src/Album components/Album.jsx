/*export const Album = (props) => {
  return <div>This album is a: {props.albumType}</div>;
};*/
import data from "../data.json";
import { AlbumName } from "./AlbumName";
import PropTypes from "prop-types";
import { CoverImage } from "./CoverImage";

export const Album = (props) => {
  return (
    <div>
      This album is a: {props.albumType}!
      <AlbumName name={data.albums.items[0].name} />
      <CoverImage image={data.albums.items[0].images[1].url} />
    </div>
  );
};

Album.propTypes = {
  albumType: PropTypes.string.isRequired,
};
CoverImage.PropTypes = {
  name: PropTypes.string.isRequired,
};

// just tried to simply connect them so that the data would show
// Your code at the top gave me an error. After googeling I found something about proptypes. I don't really now how it's really working, but there is no error now.
