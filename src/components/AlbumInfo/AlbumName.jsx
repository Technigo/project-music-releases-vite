
//creating component with prop with data from Album
//creating object with the name and link, link-properties, and class for CSS.
export const AlbumName = ({ singleAlbumItem }) => {
    let singleItemObject = {
        headingTwo: singleAlbumItem.name,
        aHref: singleAlbumItem.external_urls.spotify,
        target: "_blank", //opens link in new tab
        rel: "noreferrer noopener", //attributes for security
        class: "albumName",
    };
    //creating the output; div with className, a link that is a string, using properties of the object above.
    return(
        <div className={singleItemObject.class}>
            <a
                href={singleItemObject.aHref}
                target={singleItemObject.target}
                rel={singleItemObject.rel}
                >
                <h2>{singleItemObject.headingTwo}</h2>
            </a>
        </div>
    );
};