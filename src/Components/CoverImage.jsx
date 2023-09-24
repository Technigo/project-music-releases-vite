//The CoverImage component displays images on a web page using the provided URL and alternative image-text.

//Defines a functional component named CoverImage. It takes two props, url (the URL of the album cover image) and alt (the alternative text for the image).
const CoverImage = ({ url, alt }) => {
    //Returns an img element with the src attribute set to the url prop, and the alt attribute set to the alt prop.
    <section className="album-outer"></section>
    return (
        <>
            <img className="CoverImage" src={url} alt={alt} />
            <div className="three-hover-buttons">
                <img className="button-heart" src="./src/assets/icons/heart.svg" alt="Heart button" />
                <img className="button-play" src="./src/assets/icons/play.svg" alt="Play button" />
                <img className="button-dots" src="./src/assets/icons/dots.svg" alt="Dots button" />
            </div>
        </>
    )
}

//Export component
export default CoverImage