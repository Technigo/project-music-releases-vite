// import React, { useState } from 'react';
// import AlbumName from './AlbumName';
// import ArtistName from './ArtistName';
// import CoverImage from './CoverImage';
// import Header from './Header';

// import React, { useState } from 'react';
// import PropTypes from 'prop-types'; // Import PropTypes
// import AlbumName from './AlbumName';
// import ArtistName from './ArtistName';
// import CoverImage from './CoverImage';
// import Header from './Header';

// function Album({ album }) {
//   const [isHovered, setIsHovered] = useState(false);

//   const handleMouseEnter = () => {
//     setIsHovered(true);
//   };

//   const handleMouseLeave = () => {
//     setIsHovered(false);
//   };

//   return (
//     <React.Fragment>
//       <div
//         className={`album ${isHovered ? 'hovered' : ''}`}
//         onMouseEnter={handleMouseEnter}
//         onMouseLeave={handleMouseLeave}
//       >
//         <CoverImage imageUrl={album.coverImageUrl} />
//         <Header />
//         <AlbumName name={album.name} />
//         <ArtistName artists={album.artists} />
//         {/* Add Play Button, Favorite Button, and Ellipsis */}
//         {/* Add external routing links */}
//       </div>
//     </React.Fragment>
//   );
// }

// // Define PropTypes for the 'album' prop
// Album.propTypes = {
//   album: PropTypes.shape({
//     coverImageUrl: PropTypes.string.isRequired,
//     name: PropTypes.string.isRequired,
//     artists: PropTypes.arrayOf(
//       PropTypes.shape({
//         name: PropTypes.string.isRequired,
//         externalUrl: PropTypes.string.isRequired,
//       })
//     ).isRequired,
//     // Add more PropTypes for other album properties if necessary
//   }).isRequired,
// };

// export default Album;


import React, { useState } from 'react';
import PropTypes from 'prop-types';
import AlbumName from './AlbumName';
import ArtistName from './ArtistName';
import Header from './Header';

function Album({ album }) {
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  return (
    <React.Fragment>
    <div
      className={`album ${isHovered ? 'hovered' : ''}`}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {album.images.map((image, index) => (
        <img
          key={index}
          className="cover-image"
          src={image.url}
          alt={`Album Cover ${index + 1}`}
        />
      ))}
      <Header />
      <AlbumName name={album.name} />
      <ArtistName artists={album.artists} />
      {/* Add Play Button, Favorite Button, and Ellipsis */}
      {/* Add external routing links */}
    </div>
    </React.Fragment>
  );
}

Album.propTypes = {
  album: PropTypes.shape({
    images: PropTypes.arrayOf(
      PropTypes.shape({
        url: PropTypes.string.isRequired,
        height: PropTypes.number.isRequired,
        width: PropTypes.number.isRequired,
      })
    ).isRequired,
    name: PropTypes.string.isRequired,
    artists: PropTypes.arrayOf(
      PropTypes.shape({
        name: PropTypes.string.isRequired,
        external_urls: PropTypes.shape({
          spotify: PropTypes.string.isRequired,
        }).isRequired,
      })
    ).isRequired,
    // Add more PropTypes for other album properties if necessary
  }).isRequired,
};

export default Album;

