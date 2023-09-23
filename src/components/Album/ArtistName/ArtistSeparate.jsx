import "./ArtistSeparate.css"

// Component for separating the artist names with comma and &

export const ArtistSeparate = ({ index, length }) => {
    if (index === length - 2) {
        return <span className="ampersand-space"> &amp; </span>
    } else if (index < length - 2) {
        return <span className="comma-space">, </span>
    }
    return ""; // Default case returns an empty string;
}