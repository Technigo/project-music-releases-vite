// Importing PropTypes to get rid of error saying props missing in validation.
import React from "react";
import PropTypes from "prop-types";

// Functional component that destructures the prop artist, and sets it as the text of the h3 tag representing the artist name.
export const ArtistName = ({ artists }) => {
    const lengthOfArtists = artists.length;

    return ( // Maps over the artist array and adds the correct url and name for each condition. 
      <>
        {artists.map((artist, index) => { // Passing in the index here to check for inside the map
          if (index === 0) return <a href={artist.external_urls.spotify} key={artist.id}>{artist.name}</a>; // If index is exactly 0 return only the name, key and url. 
  
          if (index === lengthOfArtists - 1) {
            // Using React.Fragment here instead of a div or span, to get the elements to line up properly
            return <React.Fragment key={artist.id}> & <a href={artist.external_urls.spotify}>{artist.name}</a></React.Fragment> // If index is one less than the length of the array, put "&" between the names.
          }
          return <React.Fragment key={artist.id}>, <a href={artist.external_urls.spotify}>{artist.name}</a></React.Fragment> // Otherwise put a comma between the names.
        })}
      </>
    );
  }


// Defining propTypes for this component, to get rid of error saying props is missing in validation.
ArtistName.propTypes = {
    artists: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.string.isRequired,
            name: PropTypes.string.isRequired,
            external_urls: PropTypes.shape({
                spotify: PropTypes.string.isRequired,
            }).isRequired,
        })
    ).isRequired,
};