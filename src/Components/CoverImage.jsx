//Defines a functional component named CoverImage. It takes two props, url (the URL of the album cover image) and alt (the alternative text for the image).
const CoverImage = ({ url, alt }) => {
    //Returns an img element with the src attribute set to the url prop, and the alt attribute set to the alt prop.
    return (
        <img src={url} alt={alt} />
    )
}

//Export component
export default CoverImage