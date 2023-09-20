

export const ArtistName = ({ artists }) => {
    return (
        <div>
            {artists.map((artist) => (
                <div key={artist.id}>
                    <a href={artist.external_urls.spotify} target="_blank" rel="noopener noreferrer">{artist.name}</a>
                </div>
            ))}
        </div>
    )
}
