import { ArtistSeparator } from "./ArtistSeparator";
import { ArtistName } from "./ArtistName";

// Functional component that destructures the prop artists. The mapping is done here, and index, length and artist is passed on to child components Artist and ArtistSeparator
export const ArtistsListing = ({ artists }) => {
    return (
        <>
            {artists.map((artist, index) => ( // Maps over the artist array and adds the correct url and name for each condition. 
                // Checking first to see if index is greater than 0, so that the separators aren't being added in before any artistnames.
                <span key={artist.id}>
                  {index > 0 && <ArtistSeparator index={index} length={artists.length} />  }
                  <ArtistName artist={artist} />
                </span>
            ))}
        </>
    );
}