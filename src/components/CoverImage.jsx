/* eslint-disable react/prop-types */

export const CoverImage = ( { infoArray} ) => {

    let coverImage = infoArray[0].url

    return (<img src={coverImage} alt="Logo" className="coverImage" />)

}