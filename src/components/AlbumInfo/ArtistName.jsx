import React from "react";

// sending ArtistName a prop from Album.jsx, it is a variabel keeping the data from the mapped array of the albums array (singleItem).
export const ArtistName = ({ singleArtistItem }) => {
    // extracts artist property array from singleArtistItem
    const { artists } = singleArtistItem;
    // console.log("SINGLE ARTIST ITEM", singleArtistItem)
    // console.log("ARTIST", artists )
    
    //check if the array is longer than 1 
    const artistCount = artists.length;

    return (
        <div className="artistName">
          {artists.map((artist, index) => (
            <React.Fragment key={artist.id}>
                {/*Getting a , if not first or last in array, otherwise an empty string.
                Getting a & if it is last in array and not the only, otherwise an empty string*/}
              {index > 0 && index < artistCount -1 ? ", " : ""}
              {index === artistCount - 1 && index > 0 ? " & " : ""}
              <a
                href={artist.external_urls.spotify}
                target="_blank"
                rel="noreferrer noopener"
              >
                {artist.name}
              </a>
            </React.Fragment>
          ))}
        </div>
      );
 };