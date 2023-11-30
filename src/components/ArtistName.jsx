

export const ArtistName = ({ artistProp }) => {
    console.log(artistProp);

    return (
        <div className="artistWrap">
            {artistProp.map((artists) => (
                <p key={artists.id}>{artists.name}</p>
            ))}
        </div>

    );
}

