import {Buttons} from "../Buttons/Buttons"

export const AlbumCover = ({ coverImage }) => {

return (
    <div className="cover-image">
        <img src={coverImage} alt="Album cover"/>
        <Buttons /> 
    
    </div>
    
)
}