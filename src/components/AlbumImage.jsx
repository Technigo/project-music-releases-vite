import React from 'react'

export const AlbumImage = ({ image, name, link }) => {
    return (
        <div className="albumImage">
            <img className="alvumnCover" src={image.url} alt={'Cover art for albumn: ${name}'} />albumImage</div>
    )
}


// export const AlbumImage = ({ images }) => {
//     return (
//         <div>
//             <p>Album Images</p>
//             {images.map((images) => (
//                 <p key={images}>{images}</p>
//             ))}
//         </div>
//     );
// }
// AlbumImages.defaultProps = {
//     images: "No image available or missing",
// };



// react-dom.development.js:14887 Uncaught Error: Objects are not valid as a React child (found: object with keys {height, url, width}). If you meant to render a collection of children, use an array instead.
