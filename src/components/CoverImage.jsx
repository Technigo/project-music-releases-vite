import { PropTypes } from 'prop-types';

export const CoverImage = (album) => {
    return (
      <div className="overlay">
        <div className="icon-container">
          <img src="./src/assets/icons/heart.svg" className="heart icon" alt="heart"></img>
          <img src="./src/assets/icons/play.svg" className="play icon" alt="play"></img>
          <img src="./src/assets/icons/dots.svg" className="dots icon" alt="dots"></img>
        </div>
      <img src={album.img} className="album-image" alt={album.name} />
   </div>
  );
};

CoverImage.propTypes = {
    album: PropTypes.object.isRequired,
  };
  