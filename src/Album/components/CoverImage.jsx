import PropTypes from "prop-types";
import {HeartIcon} from "./HeartIcon"
import {PlayIcon} from "./PlayIcon"
import {DotsIcon} from "./DotsIcon"


export const CoverImage = ({album}) =>{
    return(
        <div className="album-cover">
        <img src={album.images[1].url} alt={album.name} />
        <ul className="hover-menu">
            <li className="icon"><HeartIcon/></li>
            <li className="icon heart-icon">
                <a href={album.external_urls.spotify}><PlayIcon/></a>
            </li>
            <li className="icon"><DotsIcon/></li>
        </ul>
        </div>
    )
}

CoverImage.propTypes ={
    album:PropTypes.object.isRequired
}