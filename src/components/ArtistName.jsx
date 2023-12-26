

export const ArtistName = ({ artistProp }) => {
    console.log(artistProp);

    return (
        <div className="artistWrap">
            {artistProp.map((artists) => (
                <h3 key={artists.id}>{artists.name}</h3>
            ))}
        </div>

    );
}

