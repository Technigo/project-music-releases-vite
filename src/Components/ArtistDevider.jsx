//Component for & and comma

const ArtistDevider = ({ index, length }) => {
    if (index === length - 2) {
        return " & ";
    } else if (index < length - 2) {
        return ", ";
    }
    return;
}

export default ArtistDevider