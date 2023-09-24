import heart from '../../../public/heart.svg'
import play from '../../../public/play.svg'
import dots from '../../../public/dots.svg'

const CoverImage = ({coverImage}) => {
   return ( //Rendering JSX and inserting icons
      <div className="coverimage-wrapper"><img src={coverImage} alt="Album cover" />
        <span className="icon-container">
            <button type="button" /> 
                <img src={heart} alt="Heart Icon" className="white-icon"/>
            <button type="button" className="play-icon-button custom-play-button">
                <img src={play} alt="Play Icon" className="white-icon"/>
            </button> 
            <button type="button" />
                <img src={dots} alt="Dots Icon" className="white-icon"/>
        </span>
      </div>
    )
}
//Exporting the CoverImage component to be reused
export default CoverImage