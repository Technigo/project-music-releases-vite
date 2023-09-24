const Artist = ({ name, externalUrl }) => {
    return (
        <a
            className="artist-name"
            target="_blank"
            rel="noreferrer"
            href={externalUrl}
        >
            {name}
        </a>
    )
};

export default Artist;