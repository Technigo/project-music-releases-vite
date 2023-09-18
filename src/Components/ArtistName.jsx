export const ArtistName = () => {
    const artistName = data.albums.items[0].artists[0].name;
    return (
        <p>{artistName}</p>;
    )
}