// AlbumInfo

const AlbumInfo = ({ album, externalUrl }) => {
    return (
        <div className="AlbumInfo">
            <p className="AlbumName">
                <a href={externalUrl} target="_blank" rel="noopener noreferrer">
                    {album}
                </a>
            </p>
        </div>
    );
};

export default AlbumInfo;
