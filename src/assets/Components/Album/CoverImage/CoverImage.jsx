import heart from "./icons/heartwhite.svg";
import play from "./icons/playwhite.svg";
import dots from "./icons/dotswhite.svg";

export const CoverImage = ({ coverImage }) => {
    return ( 
    <div className="album-icons">
    <div className="cover-icons">
    <img className="cover-image" src={coverImage}/>
    <div className="icons">
            <img className="heart" src={heart} width="30px"/>
            <img className="play" src={play} width="30px"/>
            <img className="dots" src={dots} width="30px"/>
        </div></div>
    
    
    </div>
    )
}
    

    
