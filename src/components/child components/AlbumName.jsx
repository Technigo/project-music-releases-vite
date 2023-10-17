export const AlbumName = ({ name }) => {
    return (
        <p className="albumName">  
            {name}
        </p>
    );
};

AlbumName.defaultProps = {
    name: "No album name",
};