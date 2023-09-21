import "./CoverImage.css";

export const CoverImage = ({infoArray}) => {
  
  let coverImage = infoArray[0].url
  
  return (
    <div>
     <img src={coverImage} className="coverImage" alt="Album image" />
    </div>
  )
}
