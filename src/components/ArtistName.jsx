

export const ArtistName = ({ artistProp }) => {
    console.log(artistProp);

    return (
        <div>
            {artistProp.map((artists) => (
                <p key={artists.id}>{artists.name}</p>
            ))}
        </div>

    );
}

