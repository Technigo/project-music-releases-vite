const CoverImage = ({coverImage}) => {
   return ( //Rendering JSX and inserting icons
      <div className="coverimage-wrapper"><img src={coverImage} alt="Album cover" />
        <span className="icon-container">
            <button type="button" /> 
                <img src="/heart.svg" alt="Heart Icon" className="white-icon"/>
            <button type="button" className="play-icon-button custom-play-button">
                <img src="/play.svg" alt="Play Icon" className="white-icon"/>
            </button> 
            <button type="button" />
                <img src="/dots.svg" alt="Dots Icon" className="white-icon"/>
        </span>
      </div>
    )
}
//Exporting the CoverImage component to be reused
export default CoverImage