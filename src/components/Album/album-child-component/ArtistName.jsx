import "../../../index.css";

//Generate a comma and space separater
const generateSeparater = (index, length) => {
    if (index !== length - 1) {//if current element is not the last one
        return ', ';
    }
    return;
};

export const ArtistName = ({ artists }) => {
    return (
        <div className="artist-name">
            {artists.map((artist, index) => (
                <div key={artist.id}>
                    <a href={artist.external_urls.spotify} target="_blank" rel="noopener noreferrer">{artist.name}</a>
                    {generateSeparater(index, artists.length)}

                </div>
            ))}
        </div>
    )
}
