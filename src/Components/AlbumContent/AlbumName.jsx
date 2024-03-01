export const AlbumName = ({albumName, albumURL}) => {

    return (
        <div className="album-name">

            <a href={albumURL} 
            target="_blank"
            rel="noopener noferrer"
            className="album-link">
            <h2>{albumName}</h2>
            </a>

        </div>
    );
};