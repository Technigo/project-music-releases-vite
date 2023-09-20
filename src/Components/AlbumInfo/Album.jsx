export const Album = (album) => {
    return (
        <div className="album">
            <a 
            key={album.id}
            href={album.external_urls.spotify}
            target="_blank"
            rel="noreferrer">
                <span>{album.name}</span>
            </a>
        </div>
    );
}