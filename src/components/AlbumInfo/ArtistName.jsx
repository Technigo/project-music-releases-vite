
// sending ArtistName a prop from Album.jsx, it is a variabel keeping the data from the mapped array of the albums array (singleItem).
export const ArtistName = ({ singleArtistItem }) => {
    // extracts artist property array from singleArtistItem
    const { artists } = singleArtistItem;
    
    //how to display artists names, if multiple.
    //if the array lenght is 1, artistNames just takes the first name
    //if it's 2, it gets the first and second values of the array, formating it with template literals.
    //if more than 2, it maps the array, the "length - 2" calculates a value that is two less than the array length.
    //so first case, index of the current artistname is before than the second last, it get a comma. if it is the second last, it gets a &, if it's last it get nothing.
    let artistNames = "";

    if (artists.length === 1) {
        artistNames = artists[0].name;
    } else if (artists.length === 2) {
        artistNames = `${artists[0].name} & ${artists[1].name}`;
    } else if (artists.length > 2) {
        artists.map((artist, index) => {
            if (index < artists.length - 2) {
                return (artistNames += `${artist.name},`);
            } else if ( index === artists.length - 2) {
                return (artistNames += `${artist.name} & `);
            } else {
                return (artistNames += artist.name);
            }
        });
    }

    //creating object! containg name, link and link-properties/attributes, and a class for CSS.
    let artistObject = {
        headingThree: artistNames,
        aHref: singleArtistItem.external_urls.spotify,
        target: "_blank",
        rel: "noreferrer noopener",
        class: "artistName" 
    };
    //rendering a div containing link with the attributes of the object above.
    return(
        <div className={artistObject.class}>
            <a
                href={artistObject.aHref}
                target={artistObject.target}
                rel={artistObject.rel}
            >
                <h3>{artistObject.headingThree}</h3>
            </a>
        </div>
    );
};