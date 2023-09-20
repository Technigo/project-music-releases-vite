const Album = ({
    name,
    coverImage,
    artists,
}) => {
    return (
        <div>
            <img src={coverImage} alt="Album cover image" />
            <h6>{name}</h6>
            {artists.map((artist) => (
                <a
                    key={artist.id}
                    target="_blank"
                    href={artist.external_urls.spotify}
                >
                    {artist.name}
                </a>
            ))}
        </div>
    );
};

export default Album;