//Component for comma and &

//Export component named ArtistComma and takes two props 'index' and 'length'
export const ArtistComma = ({ index, length }) => {
    if (index === length - 2) {
        return " & "; //Adds a '&' if the current item is second-to-last
    } else if (index < length - 2) {
        return ", "; //Adds ',' when more than two artists
    }
    return;
}
