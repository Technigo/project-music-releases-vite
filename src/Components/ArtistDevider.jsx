//Component for & and comma

const ArtistDevider = ({ index, length }) => {
    if (index === length - 2) {
        return <span className="ampersand-space"> &amp; </span>;
    } else if (index < length - 2) {
        return <span className="comma-space">, </span>
    }
    return null; // Default case returns null to render nothing;
}

export default ArtistDevider
