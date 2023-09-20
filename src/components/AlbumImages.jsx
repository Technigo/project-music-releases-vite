

export const AlbumImages = ({ images }) => {
    return (
        <div>
            <p>Album Images</p>
            {images.map((images) => (
                <p key={images}>{images}</p>
            ))}
        </div>
    );
}
AlbumImages.defaultProps = {
    images: "No image available or missing",
};

