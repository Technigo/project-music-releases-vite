// Component for separating the artist names with comma and &

export const ArtistSeparate = ({ index, length }) => {
    if (index === length - 2) {
        return " & ";
    } else if (index < length - 2) {
        return ", ";
    }
    return ""; // Default case returns an empty string;
}