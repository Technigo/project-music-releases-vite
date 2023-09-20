export const AlbumName = ({ singleAlbumItem }) => {
    let singleItemObject = {
        headingTwo: singleAlbumItem.name,
        aHref: singleAlbumItem.external_urls.spotify,
        target: "_blank",
        rel: "noreferrer noopener",
        class: "albumName",
    };
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