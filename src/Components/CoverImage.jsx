export const CoverImage = ()  => {
    const coverImageURL = data.albums.items[0].artists[0].images;
    return (
        <img {coverImage} />
    )
}