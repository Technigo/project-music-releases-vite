export const AlbumName = ({ album }) => {
    return (
        <p>
            <span>Album:</span>
            {album}
        </p>
    );
};

AlbumName.defaultProps = {
    album: "No album name",
};