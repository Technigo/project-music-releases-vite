import { Album } from "./Album";
import PropTypes from 'prop-types';


export const ExploreAlbum = ({ allAlbums }) => {
  //create a variable that randomly selects an album from the json
  let exploreAlbumOne = allAlbums[Math.floor(Math.random() * allAlbums.length)];
  let exploreAlbumTwo = allAlbums[Math.floor(Math.random() * allAlbums.length)];

  return (
    <>
      <Album albumData={exploreAlbumOne} />
      <Album albumData={exploreAlbumTwo} />
    </>
  )
}

ExploreAlbum.propTypes = {
  allAlbums: PropTypes.array.isRequired,
};