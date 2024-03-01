//Generate a comma and space separater
const generateSeparater = (index, length) => {
    if (index !== length - 1) {//if current element is not the last one
        return ', ';
    }
    return;// if function returns undefined, no separater- default case
};

export const ArtistName = ({ artists }) => {
    return (
        <div className="artist-name">
            {artists.map((artist, index) => (
                <div
                    key={artist.id}
                    className="artist-inline">
                    <a
                        href={artist.external_urls.spotify}
                        target="_blank"
                        rel="noopener noreferrer">{artist.name}</a>

                    {generateSeparater(index, artists.length)}
                </div>
            ))}
        </div>
    )
}
