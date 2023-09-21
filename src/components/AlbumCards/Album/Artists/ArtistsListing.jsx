// Importing PropTypes to get rid of error saying props missing in validation.
import React from "react";
import PropTypes from "prop-types";
import { ArtistSeparator } from "./ArtistSeparator";
import { ArtistName } from "./ArtistName";

// Functional component that destructures the prop artists. The mapping is done here, and index, length and artist is passed on to child components Artist and ArtistSeparator
export const ArtistsListing = ({ artists }) => {
    return (
        <>
            {artists.map((artist, index) => ( // Maps over the artist array and adds the correct url and name for each condition. 
                // Using React.Fragment here instead of a div or span, to get the elements to line up properly
                // Checking first to see if index is greater than 0, so that the separators aren't being added in before any artistnames.
                <React.Fragment key={artist.id}>
                  {index > 0 && <ArtistSeparator index={index} length={artists.length} />  }
                  <ArtistName artist={artist} />
                </React.Fragment>
            ))}
        </>
    );
}


// Defining propTypes for the ArtistName component.
ArtistsListing.propTypes = {
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