
export const Artists = ({ name, artistURL, id }) => {

    // I think the fact that name is a string is why I can't work our how to add a comma
    console.log(typeof name);
    console.log(name);
    return (
        <a
            target="_blank"
            className="artists-names"
            href={artistURL}
            key={id}
            rel="noreferrer noopener"
        >
            <p className="artist-name">
            </p>
            {name}
        </a>
    )
}
Artists.defaultProps = {
    name: "No name information available",
    artistUrl: "No Url available",
};
