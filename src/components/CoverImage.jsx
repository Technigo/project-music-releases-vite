

export const CoverImage = ({ images }) => {
    return (
        <div>
            <img src={images[1].url} alt="album cover image" />
            <span className="iconWrapper"></span>
        </div>

    )
}
