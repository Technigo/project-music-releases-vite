export const ArtistNameSeparator = ({ index, length }) => {
    if (index < length - 2) {
        return ", "; // Add a comma for all but the last two artists
    } else if (index === length - 2) {
        return " & "; // Add '&' for the second-to-last artist
    }
    return null; // For the last artist, return nothing
};

