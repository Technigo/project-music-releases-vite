// import "../../../index.css"

export const CoverImage = ({ url }) => {
    return (
        <div className="cover-image-container">
            <img src={url} alt="cover image" />
            <span className="icon-container">
                <button type="button" className="icon heart">
                    <img src="src/assets/heart.svg" alt="icon dots" />
                </button>
                <button type="button" className="icon play">
                    <img src="src/assets/play.svg" alt="icon dots" />
                </button>
                <button type="button" className="icon ellipsis">
                    <img src="src/assets/dots.svg" alt="icon dots" />
                </button>
            </span>
        </div>
    )
}
