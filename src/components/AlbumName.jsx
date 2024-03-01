// Component containing album name and link to external url.
const AlbumName = ({ name, externalUrl }) => {
    return (
        <a
            className="album-name"
            target="_blank"
            href={externalUrl}
            rel="noreferrer"
        >
            {name}
        </a>
    );
};

export default AlbumName;