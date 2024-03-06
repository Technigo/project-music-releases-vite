import data from "../data.json";
import { AlbumName } from "./AlbumName";


export const Album = () => {
  const { albums } = data;
  const { eachAlbum } = albums.items;
  console.log(albums.items)

  const renderItems = eachAlbum?.map(({ name, id }) => (
    <AlbumName name={name} key={id} />
  ));
  
  return (
    <div>
      <section>{renderItems}</section>
    </div>
  );
};












/*
CoverImage.propTypes = {
  name: PropTypes.string.isRequired,
};*/

/*<This album is a: {props.albumType}!
<AlbumName name={data.albums.items[0].name} />
<CoverImage image={data.albums.items[0].images[1].url} />*/
