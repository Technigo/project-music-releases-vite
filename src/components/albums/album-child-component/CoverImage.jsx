export const CoverImage = ({ url }) => {
    return (
        <div className="cover-image-container">
            <img src={url} alt="cover image" />
            <span className="icon-container">
                <button
                    type="button"
                    className="icon heart">
                    <img
                        src="./heart.svg"
                        alt="icon dots" />
                </button>
                <button
                    type="button"
                    className="icon play">
                    <img
                        src="./play.svg"
                        alt="icon dots" />
                </button>
                <button
                    type="button"
                    className="icon ellipsis">
                    <img
                        src="./dots.svg"
                        alt="icon dots" />
                </button>
            </span>
        </div>
    )
}
