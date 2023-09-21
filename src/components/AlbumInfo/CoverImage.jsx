
//creating a component with prop from album
//creating an object containing src and alt, taking data from the singleItem array(singleCoverItem)
export const CoverImage = ({ singleCoverItem }) => {
    const imageIndex = 0;
    let imgObject = {
        imgSrc: singleCoverItem.images[imageIndex].url,
        imgAlt: singleCoverItem.name,
    };
//creating a div for the image, giving it a className.
    return (
        <div className="cover-image-wrapper">
            <img src={imgObject.imgSrc} alt={imgObject.imgAlt} />
        </div>
    )
}