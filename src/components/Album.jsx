const Album = ({
    name,
    externalUrl,
    coverImage,
    artists,
}) => {
    return (
        <div>
            <img src={coverImage} alt="Album cover image" className="album-cover" />
            <a
                target="_blank"
                href={externalUrl}
            >
                {name}
            </a>
            {artists.map((artist) => (
                <a
                    key={artist.id}
                    target="_blank"
                    href={artist.externalUrl}
                >
                    {artist.name}
                </a>
            ))}
        </div>
    );
};

export default Album;