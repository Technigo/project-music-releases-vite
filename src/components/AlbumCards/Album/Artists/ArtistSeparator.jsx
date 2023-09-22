// Functional component that destructures the props index and length from ArtistName.jsx.
export const ArtistSeparator = ({ index, length }) => {
    if(length === 2 && index === length - 1) { 
        return ' & '; // Checks if total length of the names array is 2 and if the index of the current artist being mapped is one less than two, in that case it adds an ampersand, otherwise a comma.
    }
    if(index === length - 1) { //Puts an ampersand between the names if there are only two names. 
        return ' & ';
    }
    return ', ';// Otherwise put a comma between the names.
}