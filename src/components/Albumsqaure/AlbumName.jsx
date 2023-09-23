export const AlbumName = ({ name, albumURL }) => {
    return (
        <div className="album-title">
            <p className="AlbumName">
            <a href={albumURL} target="_blank" rel="noopener norefferer">
                {name}
                </a>
                </p>
                </div>
    );
};

export default AlbumName;