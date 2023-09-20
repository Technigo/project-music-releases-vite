export const Artist = (album) => {
    return (
        <div className="artist">
            <a 
            key={album.artists.id}
            href={album.artists.external_urls.spotify}
            target="_blank"
            rel="noreferrer">
                <span>{album.artists.name}</span>
            </a>
        </div>
    )
}