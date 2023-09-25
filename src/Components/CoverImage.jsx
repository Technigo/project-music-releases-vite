//The CoverImage component displays images on a web page using the provided URL and alternative image-text.

//Defines a functional component named CoverImage. It takes two props, url (the URL of the album cover image) and alt (the alternative text for the image).
const CoverImage = ({ url, alt }) => {
    //Returns an img element with the src attribute set to the url prop, and the alt attribute set to the alt prop.
    return (
        <span className='coverImage'>
            <img src={url} alt={alt} />
            <div className='ikonButtons'>
                <img className='buttonHeart' src="./public/icons/heart.svg" alt="Heart button" />
                <img className='buttonPlay' src="./public/icons/play.svg" alt="Play button" />
                <img className='buttonDots' src="./public/icons/dots.svg" alt="Dots button" />
            </div>
        </span>
    )
}

//Export component
export default CoverImage