import { Album } from "./Album";


export const Artists = ({ artists }) => {
    return (
        <p>artists go here</p>
    );
};

Artists.defaultProps = {
    artists: "No name information available"
};


// @react-refresh:278 Uncaught Error: Objects are not valid as a React child (found: object with keys {external_urls, href, id, name, type, uri}). If you meant to render a collection of children, use an array instead.