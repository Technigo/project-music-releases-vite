export const ArtistNameSeparator = ({ index, length }) => {
    if (index === length - 2) {
        return " & "; 
    } else if (index < length - 2) {
        return ", "; 
    }
    return;
}