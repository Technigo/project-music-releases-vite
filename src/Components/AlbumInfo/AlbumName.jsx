import "./AlbumName.css";

export const AlbumName = ({album}) => {
    return (
        <div className="album">
            <a 
            key={album.id}
            href={album.external_urls.spotify}
            target="_blank"
            rel="noreferrer">
                <h2>{album.name}</h2>
            </a>
        </div>
    );
}