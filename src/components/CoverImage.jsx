import "./cover-image.css"
import { Buttons } from "./Buttons"

export const CoverImage = ( { imageURL} ) => {
    //Returns a div called coverImageAndButtons which contains the coverimage (src set by the prop imageURL) and buttons
    return (
        <>
            <div className="coverImageAndButtons">
                <img src={imageURL} alt="Logo" className="coverImage" />
                <Buttons />
            </div>
        </>
    )

}