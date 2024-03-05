import data from "../data.json";
import { AlbumName } from "./AlbumName";
import PropTypes from "prop-types";
/*import { CoverImage } from "./CoverImage";*/

export const Album = () => {
  const { albums } = data;
  const { items } = albums.items;
  const renderItems = items.map(({ name, id }) => (
    <AlbumName name={name} key={id} />
  ));
  return (
    <div>
      <section>{renderItems}</section>
    </div>
  );
};

Album.propTypes = {
  albumType: PropTypes.string.isRequired,
};
/*
CoverImage.propTypes = {
  name: PropTypes.string.isRequired,
};*/

/*<This album is a: {props.albumType}!
<AlbumName name={data.albums.items[0].name} />
<CoverImage image={data.albums.items[0].images[1].url} />*/
