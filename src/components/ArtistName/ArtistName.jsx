import React from 'react';
import "./artistname.css";  

// Define the functional component "ArtistName" that takes a single artist item as a prop
export const ArtistName = ({ singleArtistItem }) => {
  // Extract the list of artists from the singleArtistItem object
  const { artists } = singleArtistItem;


   // Create an array of <a> elements for each artist, with links to their Spotify profiles
  const artistLinks = artists.map((artist, index) => (
    <a
      key={index}
      href={artist.external_urls.spotify}
      target="_blank" // Open links in a new tab
      rel="noreferrer noopener" //// Recommended for security
    >
      {artist.name}
    </a>
  ));

  return (
    <div className="artist-name"> {/* Assign the "artist-name" CSS class to a wrapping div */}
      {artistLinks.length > 0 && ( // Render artist names only if there are artists to display
        <p>
          {artistLinks.map((link, index) => (
            <React.Fragment key={index}>
              {index > 0 && ', '} {/* Add a comma and space if not the first artist */}
              {link}
            </React.Fragment>
          ))}
        </p>
      )}
    </div>
  );
};
