export const CoverImage = ({ image }) => {

    return (
        <div className="cover-image">
            <img src={image.url} alt="Image of Cover" />

        </div>
    )
}

// image.url is missing a prop here