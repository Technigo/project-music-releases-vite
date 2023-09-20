import PropTypes from 'prop-types'

// const CoverImage = ({imagesArray}) => {
//   return (
//     <div className="image-wrapper">
//         {imagesArray.map((mappedOutImage) => (
//             <div className="cover-image" key={mappedOutImage.images}>
//                 <img src={mappedOutImage.url} alt={mappedOutImage.alt} />
//             </div>
//         ))}
//     </div>
//   )
// }

const CoverImage = ({coverImage}) => {
    return (
         <div className="cover-images">
            <img src={coverImage} className="album-cover" alt="Cover" />
        </div>
        )
}

CoverImage.propTypes = {
    coverImage:PropTypes.string.isRequired
}

export default CoverImage