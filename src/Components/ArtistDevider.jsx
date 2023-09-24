//Component for & and comma

const ArtistDevider = ({ index, length }) => {
    if (index === length - 2) { // Checks if the current index (artist) is the second-to-last item in the list.
        return <span className="ampersand-space"> &amp; </span>; // If the above statement is true then the &-sign is showing.

    } else if (index < length - 2) { // If the artist is not second-to-last a comma is inserted as a devider between artists. 
        return <span className="comma-space">, </span>
    }
    return null; // Default case returns null to render nothing.
}
//Exporting the component to be reused.
export default ArtistDevider
