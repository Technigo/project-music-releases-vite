


export const Artists = ({ name, artistUrl }) => {
    console.log(typeof name)

    return (
        <span>{name}</span>
    )
}
Artists.defaultProps = {
    name: "No name information available",
    artistUrl: "No link available"
};


// @react-refresh:278 Uncaught Error: Objects are not valid as a React child (found: object with keys {external_urls, href, id, name, type, uri}). If you meant to render a collection of children, use an array instead.