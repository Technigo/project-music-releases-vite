//The CoverImage component displays images on a web page using the provided URL and alternative image-text.

//Defines a functional component named CoverImage. It takes two props, url (the URL of the album cover image) and alt (the alternative text for the image).
const CoverImage = ({ url, alt }) => {
    //Returns an img element with the src attribute set to the url prop, and the alt attribute set to the alt prop.
    return (
        <span className='coverImage'>
            <img src={url} alt={alt} />
            <div className='ikonButtons'>
                <img className='buttonHeart' src="./icons/heart.svg" alt="Heart button" />
                <img className='buttonPlay' src="./icons/play.svg" alt="Play button" />
                <img className='buttonDots' src="./icons/dots.svg" alt="Dots button" />
            </div>
        </span>
    )
}
// ICONS were a real issue - they did not show, and when I moved them to other folders (tips from others) they moved by themseleves agian.

//Export component
export default CoverImage